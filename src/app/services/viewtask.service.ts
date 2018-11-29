import { Injectable } from '@angular/core';
import {TaskDetails} from 'src/app/model/addtask';
import {HttpClient} from '@angular/common/http';
import {ITasks} from  'src/app/model/viewtask';
import {Observable} from 'rxjs';
//import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class ViewtaskService {
private _url:string='http://localhost/TManagerService/Task';
  constructor(private _http:HttpClient) { }
  getAllTasks():Observable<ITasks[]>{
    return this._http.get<ITasks[]>(this._url)
  }
  deleteTask(task_id):Observable<void>{
    return this._http.delete<void>(this._url+'/'+task_id)
    
  }
  getTaskById(_id:number):Observable<ITasks>{
        return this._http.get<ITasks>(this._url +'/' +_id);
}
  updateTask(taskinfo:ITasks,){
    return this._http.put<any>(this._url+'/'+taskinfo.task_id,taskinfo);
  }

}
