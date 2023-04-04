import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { UserStorageService } from 'src/app/services/storage/user-storage.service';
import { environment } from 'src/environments/environment';

const BASIC_URL = environment['BASIC_URL'];

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient,
    private userStorageService: UserStorageService) { }

  getAllPlans(): Observable<any> {
    return this.http
      .get<[]>(BASIC_URL + "api/customer/plans", {
        headers: this.createAuthorizationHeader(),
      })
      .pipe(
        tap((_) => this.log('Plans Fetched successfully')),
        catchError(this.handleError<[]>('Error Getting Plans', []))
      );
  }

  getAllBroadBands(): Observable<any> {
    return this.http
      .get<[]>(BASIC_URL + "api/customer/broadBands", {
        headers: this.createAuthorizationHeader(),
      })
      .pipe(
        tap((_) => this.log('BroadBands Fetched successfully')),
        catchError(this.handleError<[]>('Error Getting BroadBands', []))
      );
  }

  getPlanById(planId: any): Observable<any> {
    return this.http
      .get<[]>(BASIC_URL + `api/customer/plan/${planId}`, {
        headers: this.createAuthorizationHeader(),
      })
      .pipe(
        tap((_) => this.log('Plan Fetched successfully')),
        catchError(this.handleError<[]>('Error Getting Plan', []))
      );
  }

  getBroadBandById(broadbandId: any): Observable<any> {
    return this.http
      .get<[]>(BASIC_URL + `api/customer/broadBand/${broadbandId}`, {
        headers: this.createAuthorizationHeader(),
      })
      .pipe(
        tap((_) => this.log('BroadBand Fetched successfully')),
        catchError(this.handleError<[]>('Error Getting BroadBand', []))
      );
  }

  subscribePlan(planId: any, planSubscriptionDto: any): Observable<any> {
    planSubscriptionDto.userId = UserStorageService.getUserId();
    return this.http
      .post<[]>(BASIC_URL + `api/customer/subscribe-plan/${planId}`, planSubscriptionDto, {
        headers: this.createAuthorizationHeader(),
      })
      .pipe(
        tap((_) => this.log('Plan subscribed Successfully')),
        catchError(this.handleError<[]>('Error occuring while subscribe Plan', []))
      );
  }

  subscribeBroadband(broadbandId: any, broadBandSubscribeDto: any): Observable<any> {
    broadBandSubscribeDto.userId = UserStorageService.getUserId();
    return this.http
      .post<[]>(BASIC_URL + `api/customer/subscribe-broadband/${broadbandId}`, broadBandSubscribeDto, {
        headers: this.createAuthorizationHeader(),
      })
      .pipe(
        tap((_) => this.log('BroadBand subscribed Successfully')),
        catchError(this.handleError<[]>('Error occuring while subscribe BroadBand', []))
      );
  }

  getAllSubscribedPlans(): Observable<any> {
    return this.http
      .get<[]>(BASIC_URL + `api/customer/subscribed-plans/${UserStorageService.getUserId()}`, {
        headers: this.createAuthorizationHeader(),
      })
      .pipe(
        tap((_) => this.log('Subscribed Plans fetched successfully!')),
        catchError(this.handleError<[]>('Error Getting Subscribed Plans', []))
      );
  }

  getAllSubscribedBroadBand(): Observable<any> {
    return this.http
      .get<[]>(BASIC_URL + `api/customer/subscribed-broadBands/${UserStorageService.getUserId()}`, {
        headers: this.createAuthorizationHeader(),
      })
      .pipe(
        tap((_) => this.log('Subscribed BroadBand fetched successfully!')),
        catchError(this.handleError<[]>('Error Getting BroadBand', []))
      );
  }

  getProfileByUserId(): Observable<any> {
    return this.http
      .get<[]>(BASIC_URL + `api/customer/profile/${UserStorageService.getUserId()}`, {
        headers: this.createAuthorizationHeader(),
      })
      .pipe(
        tap((_) => this.log('Profile Fetched Successfully!')),
        catchError(this.handleError<[]>('Error Getting Profile', []))
      );
  }

  updateCustomerProfile(userDto: any): Observable<any> {
    return this.http
      .put<[]>(BASIC_URL + `api/customer/update-customer/${UserStorageService.getUserId()}`, userDto, {
        headers: this.createAuthorizationHeader(),
      })
      .pipe(
        tap((_) => this.log('Profile updating Successfully!')),
        catchError(this.handleError<[]>('Error updating Profile', []))
      );
  }

  createAuthorizationHeader(): HttpHeaders {
    let authHeaders: HttpHeaders = new HttpHeaders();
    return authHeaders.set(
      'Authorization',
      'Bearer ' + UserStorageService.getToken()
    );
  }

  log(message: string): void {
    console.log(`User Auth Service: ${message}`);
  }

  handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
