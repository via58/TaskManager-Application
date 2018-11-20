import { Component, OnInit } from '@angular/core';
import {ViewtaskService} from 'src/app/services/viewtask.service';
import {TaskfilterPipe}from 'src/app/filter/taskfilter.pipe';
import { ITasks } from '../../model/viewtask';
import { observable } from 'rxjs';
import{Router} from '@angular/router'


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  listTask:ITasks[]=[];
  updateTask:ITasks;
  filteredTask:ITasks[];
  searchTaskName:string;
  searchParentTask:string;
  searchStartDate:Date;
  searchEndDate:Date;
  priorityFrom:number;
  priorityTo:number;

  constructor(private _viewTask:ViewtaskService,
              private _router:Router) { }

  ngOnInit() {
      this._viewTask.getAllTasks()
     .subscribe(
       (data)=>{
        this.listTask=data    
      }
     )
         
  }
  removeTask(task_id:number){
    
      this._viewTask.deleteTask(task_id)
      .subscribe(
        ()=>console.log("Deleted")
      )
      this.pagereload();

      
    }
    handleUpdate(tid:number){
      
      // this._viewTask.getTaskById(tid)
      // .subscribe(
      //   (task)=>{
      //       this.updateTask=task;
      //       console.log(this.updateTask)
      //   }
      // )
      this._router.navigate(['Updatetask',tid])
      
      
    }

  pagereload(){
    window.location.reload();
  }
   


}
