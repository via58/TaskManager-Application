import { Injectable } from '@angular/core';
import {TaskDetails} from 'src/app/model/addtask';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddtaskserviceService {

  private _url='http://localhost:54548/api/Task_table';
  constructor(private _http:HttpClient) {
  }
    enroll(taskinfo:TaskDetails){
      return  this._http.post<any>(this._url,taskinfo);
    }
  
}
