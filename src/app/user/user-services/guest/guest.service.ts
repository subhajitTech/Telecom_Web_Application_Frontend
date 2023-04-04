import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, catchError, of } from 'rxjs';
import { UserStorageService } from 'src/app/services/storage/user-storage.service';
import { environment } from 'src/environments/environment';

const BASIC_URL = environment['BASIC_URL'];

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  constructor(private http: HttpClient,
    private userStorageService: UserStorageService) { }

  getAllPlansForGuest(): Observable<any> {
    return this.http
      .get<[]>(BASIC_URL + "api/guest/plans")
      .pipe(
        tap((_) => this.log('Plans Fetched successfully')),
        catchError(this.handleError<[]>('Error Getting Plans', []))
      );
  }

  getAllBroadBandsForGuest(): Observable<any> {
    return this.http
      .get<[]>(BASIC_URL + "api/guest/broadBands")
      .pipe(
        tap((_) => this.log('BroadBands Fetched successfully')),
        catchError(this.handleError<[]>('Error Getting BroadBands', []))
      );
  }

  getPlanById(planId: any): Observable<any> {
    return this.http
      .get<[]>(BASIC_URL + `api/guest/plan/${planId}`)
      .pipe(
        tap((_) => this.log('Plan Fetched successfully')),
        catchError(this.handleError<[]>('Error Getting Plan', []))
      );
  }

  getBroadBandById(broadbandId: any): Observable<any> {
    return this.http
      .get<[]>(BASIC_URL + `api/guest/broadBand/${broadbandId}`)
      .pipe(
        tap((_) => this.log('BroadBand Fetched successfully')),
        catchError(this.handleError<[]>('Error Getting BroadBand', []))
      );
  }

  subscribePlan(planId: any, planSubscriptionDto: any): Observable<any> {
    planSubscriptionDto.userId = UserStorageService.getUserId();
    return this.http
      .post<[]>(BASIC_URL + `api/guest/subscribe-plan/${planId}`, planSubscriptionDto)
      .pipe(
        tap((_) => this.log('Plan subscribed Successfully')),
        catchError(this.handleError<[]>('Error occuring while subscribe Plan', []))
      );
  }

  subscribeBroadband(broadbandId: any, broadBandSubscribeDto: any): Observable<any> {
    broadBandSubscribeDto.userId = UserStorageService.getUserId();
    return this.http
      .post<[]>(BASIC_URL + `api/guest/subscribe-broadband/${broadbandId}`, broadBandSubscribeDto)
      .pipe(
        tap((_) => this.log('BroadBand subscribed Successfully')),
        catchError(this.handleError<[]>('Error occuring while subscribe BroadBand', []))
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
