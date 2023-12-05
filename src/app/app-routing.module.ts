import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './shared/components/dash-board/dash-board.component';
import { PostCardComponent } from './shared/components/post-card/post-card.component';

const routes: Routes = [
  {
    path : '',
    component : DashBoardComponent

  },
  {
    path : "Post",
    component : PostCardComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
