import { Component, OnInit } from '@angular/core';
import {TaskDetails} from 'src/app/model/addtask';
import {AddtaskserviceService} from 'src/app/services/addtaskservice.service';
import{Router} from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private _addtaskservice:AddtaskserviceService,
              private _router:Router) { }
  tasks =new TaskDetails();
  ngOnInit() {
  }
  handlesubmit(){
    this._addtaskservice.enroll(this.tasks)
    .subscribe(
      data => console.log('success !',data),
      error => console.error('error !',error)
       
    )
    this.redirectToView();
  }
  redirectToView(){
    this._router.navigate(['Viewtask'])
    window.location.reload();
  }

  

}
