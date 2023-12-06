import { Component, OnInit } from '@angular/core';
import { LoaderService } from './shared/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  isloading : boolean = false

 
  constructor(private _loaderservice : LoaderService){
    
  }
 ngOnInit(): void {
    this._loaderservice.loadingStatus$
    .subscribe(res=>{
      this.isloading = res
    })
  }
  title = 'mafirebase';


}
