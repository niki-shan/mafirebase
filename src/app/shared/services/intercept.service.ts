import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, finalize } from 'rxjs';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptService implements HttpInterceptor {

  constructor(
    private _loaderservice : LoaderService
  ) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
     this._loaderservice.loadingStatus$.next(true)
     return next.handle(req)
     .pipe( delay(1500),    finalize(()=>{ this._loaderservice.loadingStatus$.next(false)}))
  }


  
}
