 import { HttpClient, HttpClientModule } from '@angular/common/http';
 import { Injectable } from '@angular/core';
 import { Observable, Subject, catchError, map, of } from 'rxjs';
 import { environment } from 'src/environments/environment';
 import { Ipost } from '../models/post';

 @Injectable({
  providedIn: 'root'
 })

 export class PostService {
  
   postUrl : string= `${environment.baseUrl}/post.json`
   private _observal$ :  Subject<Ipost>= new Subject<Ipost>()
   postObservable$ = this._observal$.asObservable()
  
   
  constructor( private _http : HttpClient) { 

  }


  getAlldata():Observable<any>{

      return this._http.get(this.postUrl)
      .pipe(
        map((obj: any)=>{
           let postArray : Array <Ipost> = []
           for (const key in obj) {
                postArray.push({...obj[key], id : key })
           }
          return postArray 

        }
      ))
      
  }


  creatPost(post : Ipost) : Observable<any>{
     return this._http.post<any>(this.postUrl, post)
      .pipe(
        catchError (err => {
          alert(`something wrong `)
          return of( err )
        })
      )
  }


  creatobserver( post : Ipost){
    this._observal$.next(post)
  }


  onPatch(){}
}
