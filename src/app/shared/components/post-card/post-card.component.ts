import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ipost } from '../../models/post';
import { MatDialog } from '@angular/material/dialog';
import { PostFormComponent } from '../post-form/post-form.component';
import { PostService } from '../../services/post.service';
import { GetConfirmedComponent } from '../get-confirmed/get-confirmed.component';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
  @Input() postsObj ! : Ipost ;
  @Output() eventemitter : EventEmitter <Ipost> = new EventEmitter<Ipost>()
  @Output() eventemitdelete : EventEmitter <string> = new EventEmitter<string>()

  constructor(private _matDialog : MatDialog,
    private _postservice : PostService) { }

  ngOnInit(): void {
    //  console.log(this.postsObj);
     
  }

  onEdit(){
      this.eventemitter.emit(this.postsObj)
  }

  onDelete(){
    const dialogConfig = this._matDialog.open(GetConfirmedComponent) 
    dialogConfig.afterClosed()
    .subscribe((getConfirmed: boolean)=>{
      if(getConfirmed){
        this._postservice.removePost(this.postsObj.id)
        .subscribe(res=>{
          this.eventemitdelete.emit(this.postsObj.id)
        })
      }
    })


  }

}
