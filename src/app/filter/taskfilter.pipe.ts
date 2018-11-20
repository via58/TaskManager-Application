import { PipeTransform,Pipe } from "@angular/core";
import {ITasks} from  'src/app/model/viewtask';
import {ViewComponent} from 'src/app/ui/view/view.component';
import { isoStringToDate } from "@angular/common/src/i18n/format_date";
@Pipe({
    name:'taskFilter'
    
})

export class TaskfilterPipe implements PipeTransform {
    transform(listTask:ITasks[], searchTaskName: string, searchParentTask: string,
        searchStartDate:Date,searchEndDate:Date,priorityFrom:number,priorityTo:number){
            if (listTask && listTask.length){
            return listTask.filter(tasks =>{
                if (searchTaskName && tasks.task.toLowerCase().indexOf(searchTaskName.toLowerCase()) === -1){
                    return false;
                }
                if (searchParentTask && tasks.parent_task.toLowerCase().indexOf(searchParentTask.toLowerCase()) === -1){
                    return false;
                }
                if (searchStartDate&& tasks.C_start_date===searchStartDate){   
                                      
                }
                if (priorityTo && priorityTo<tasks.C_priority) {   
                    return false
                }
                if(priorityFrom && priorityFrom > tasks.C_priority ){
                    return false;
                }
               console.log(searchStartDate +'    '+tasks.C_start_date)
               
               
                return true;
           })
        }
        else{
            return listTask;
        }
    }
}
