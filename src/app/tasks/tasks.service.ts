import { Injectable } from '@angular/core';
import { Task } from './task.model';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {AlertController} from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private Http: HttpClient) { }
  private urlad = 'https://localhost:44336/api/UserProfile/GetTask';
  private urlfail = 'https://localhost:44336/api/UserProfile/GetFailedTask';
  private urlacc = 'https://localhost:44336/api/UserProfile/GetAccTask';
  tasks: Task[];
  task1: Task;



  getAllTasks(): Observable<Task[]> {
      return this.Http.get<Task[]>(this.urlad);
   }
   getFailedTasks(): Observable<Task[]> {
       return this.Http.get<Task[]>(this.urlfail);
    }
  getAccTasks(): Observable<Task[]> {
      return this.Http.get<Task[]>(this.urlacc);
  }
    findById(id: number): Observable<Task> {
        const idBody = {TaskId: id};
        return this.Http.post<Task>('https://localhost:44336/api/UserProfile/GetTaskByID', idBody);
    }
    failedTask(id: number) {
        const idBody = {TaskId: id};
        return this.Http.post('https://localhost:44336/api/UserProfile/FailTask', idBody);
    }
    successTask(id: number) {
        const idBody = {TaskId: id};
        return this.Http.post('https://localhost:44336/api/UserProfile/SuccessTask', idBody);
    }



    getTask(taskId: number): Observable<Task>  {
     return this.findById(Number(taskId)).pipe(
         map(res => {
             this.task1 = res;
             return this.task1;
         })
     );
  }
}
