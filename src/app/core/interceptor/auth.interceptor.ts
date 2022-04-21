import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';
import {AuthService} from "../services/auth.service";


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authReq = req;
        const token = this.authService.getToken();
        if (token != null) {

            authReq = req.clone({
                headers: req.headers.set("Authorization", `Bearer ${token}`)
            });
        }
        return next.handle(authReq);
    }
}