import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { MongoStitch } from '../services/stitch.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private stitch: MongoStitch, private router: Router) {}

  canActivate() {
      if (!!this.stitch.user) {
          return true;
      } else {
          this.router.navigate(['login']);
          return false;
      }
  }
}
