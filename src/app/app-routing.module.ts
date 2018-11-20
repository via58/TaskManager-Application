import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddComponent}from './ui/add/add.component';
import {ViewComponent}from './ui/view/view.component';
import {UpdateComponent}from './ui/update/update.component';

const routes: Routes = [
  {path:'Addtask',component:AddComponent},
  {path:'Viewtask',component:ViewComponent},
  {path:'Updatetask/:_id',component:UpdateComponent},
  {path:'',component:ViewComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const AppRouting=[AddComponent,ViewComponent,UpdateComponent];