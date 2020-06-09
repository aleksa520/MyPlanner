import { Injectable } from '@angular/core';
import { Task } from './task.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private Http: HttpClient) { }
  private urlad = 'https://localhost:44336/api/UserProfile/GetTask'
  private urlfail = 'https://localhost:44336/api/UserProfile/GetFailedTask'
  private urlacc = 'https://localhost:44336/api/UserProfile/GetAccTask'
  tasks: Task[];
  task1 : Task;




  getAllTasks(): Observable<Task[]> {
    return this.Http.get<Task[]>(this.urlad);
   }
   getFailedTasks(): Observable<Task[]> {
  return this.Http.get<Task[]>(this.urlfail);
    }
  getAccTasks(): Observable<Task[]> {
    return this.Http.get<Task[]>(this.urlacc);
  }



   getTask(taskId: number) {
    this.getAllTasks().subscribe(res => this.tasks = res);
    console.log('getAllTask:' + new Date().toTimeString())
    this.task1 = this.tasks.find(task => task.TaskId == taskId);
    return this.task1;
    /*return {
        ...this.tasks.find(task => {
        return task.TaskId == taskId;
        console.log('find:' + new Date().toTimeString());
      })
    };*/
  }
}
