import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Observable } from 'rxjs';
import { UserStorageService } from 'src/app/services/storage/user-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router,
    private notification: NzNotificationService,) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {

    if(!UserStorageService.isUserLoggedIn()){
      UserStorageService.signOut();
      this.router.navigateByUrl('/login');
      this.notification
      .error(
        'ERROR',
        `You Are Not LoggedIn. Please Login First!!!`,
        { nzDuration: 5000 }
      );
      return false;
    }
    return true;
  }
  
}
