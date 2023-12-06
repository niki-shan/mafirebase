 import { Component, OnInit } from '@angular/core';
 import { PostService } from '../../services/post.service';
 import { Ipost } from '../../models/post';
 import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
 import { PostFormComponent } from '../post-form/post-form.component';

 @Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
 })
export class DashBoardComponent implements OnInit {
 postArray : Array<Ipost> = []
 editpost ! : Ipost
  constructor(private _postservice : PostService,
     private _matDialog : MatDialog) { }

  ngOnInit(): void {
     
    this._postservice.getAlldata()
     .subscribe(res=>{
      console.log(res);
      this.postArray = res
     
    })

    this._postservice.postObservable$
    .subscribe((post:Ipost)=>{
      this.postArray.push(post)
    })

   this.updateFun()

    
  }

  
  onAddpost(){
     const dialogConfig = new MatDialogConfig()
     dialogConfig.width= "400px" 
     const matdialogRef = this._matDialog.open(PostFormComponent, dialogConfig)
 
  } 

  patchvalue(eve : Ipost){
    console.log(eve);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width= "400px" ;
    dialogConfig.data = eve;
    const matdialogRef = this._matDialog.open(PostFormComponent, dialogConfig);

  }

  updateFun(){
    this._postservice.subobserval$
    .subscribe((updatepost : Ipost)=>{
      let getIndex = this.postArray.findIndex(res=>{
        return res.id === updatepost.id
      })
      this.postArray[getIndex]=updatepost
    })
  }



  onDeleteitem(id : string){
       let getIndex  = this.postArray.findIndex(res=>{
        return res.id === id
       })   
       this.postArray.splice(getIndex,1)

      
  }
}
