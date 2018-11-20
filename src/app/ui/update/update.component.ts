import { Component, OnInit } from '@angular/core';
import { ViewtaskService } from 'src/app/services/viewtask.service';
import { ITasks } from '../../model/viewtask';
import { TaskDetails } from 'src/app/model/addtask';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  taskforedit: ITasks = new ITasks();
  id: number;
  constructor(private _viewtask: ViewtaskService,
    private _router: Router,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    this.id = +(this._route.snapshot.paramMap.get('_id'))
    this._viewtask.getTaskById(this.id)
      .subscribe(
        (data) => {
          this.taskforedit = data

        }
      )

  }
  handleUpdateTask() {
    this._viewtask.updateTask(this.taskforedit)
      .subscribe(
        data => console.log('success !', data),
        error => console.error('error !', error)
      )
    this.redirectToView();
  }
  redirectToView() {
    this._router.navigate(['Viewtask'])
    window.location.reload();
  }

}
