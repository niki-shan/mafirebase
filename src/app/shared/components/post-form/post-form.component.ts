import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PostService } from '../../services/post.service';
import { Ipost } from '../../models/post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
 postForm !: FormGroup
 getPost! : Ipost
 updateValue  :boolean = false
  constructor( @Inject (MAT_DIALOG_DATA) editpost : any, 
  private _dialogREf : MatDialogRef<PostFormComponent>,
  private _postservice : PostService ) { 
    this.createForm()
    if(editpost){
    this.getPost = editpost
    
    this.postForm.patchValue(editpost) 

    }
    
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
  this._postservice.creatobserver({...obj, id : res.name})
  this.postForm.reset()
  this._dialogREf.close()
  
 })

 }
   }
  
   onUpdate(){
    let updatedObj = {...this.postForm.value, id : this.getPost.id };
     this._postservice.updatePost(updatedObj)
     .subscribe((res : any)=>{
        console.log(res);
        this._postservice.observerNext(res)
        this.postForm.reset()
        this._dialogREf.close()

     })
    }

  }


