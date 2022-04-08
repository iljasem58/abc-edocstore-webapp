import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  private accessToken = null;

  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    this.authService.getUser().subscribe((userData) => {
      this.accessToken = userData.access_token;
    });

    // if (!this.authService.getAccessToken()) {
    //   return next.handle(req);
    // }

    const request = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    });

    return next.handle(request);
  }
}
