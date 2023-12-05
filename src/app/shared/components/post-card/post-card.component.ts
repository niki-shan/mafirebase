import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ipost } from '../../models/post';
import { MatDialog } from '@angular/material/dialog';
import { PostFormComponent } from '../post-form/post-form.component';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
  @Input() postsObj ! : Ipost ;
  @Output() eventemitter : EventEmitter <Ipost> = new EventEmitter<Ipost>()
  constructor(private _matDialog : MatDialog) { }

  ngOnInit(): void {
    //  console.log(this.postsObj);
     
  }

  onEdit(){
      this.eventemitter.emit(this.postsObj)
  }

}
