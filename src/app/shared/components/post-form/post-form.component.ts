import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
 postForm !: FormGroup
 updateValue  :boolean = false
  constructor( @Inject (MAT_DIALOG_DATA) editpost : any, 
  private _dialogREf : MatDialogRef<PostFormComponent>,
  private _postservice : PostService ) { 
    this.createForm()
    this.postForm.patchValue(editpost)
    
    
  }
  

  ngOnInit( ): void {
 
  }

  createForm(){
    this.postForm = new FormGroup ({
      title : new FormControl (null, [Validators.required]),
      body : new FormControl (null, [Validators.required]),
      userId : new FormControl (null, [Validators.required]),

       
    })

    
  }


  onSubmitadd(){
    console.log("button");
 if(this.postForm.valid){
  
 let obj = this.postForm.value
 console.log(obj);
 
 this._postservice.creatPost(obj)
 .subscribe(res=>{
  console.log(res);
  this._postservice.creatobserver(obj)
  this.postForm.reset()
  this._dialogREf.close()
  
 })

 }
   }
  
   
   

  }


