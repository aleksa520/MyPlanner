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
  tasks: Task[];





  getAllTasks(): Observable<Task[]> {
    return this.Http.get<Task[]>(this.urlad)
   }



  getTask(taskId: number) {
    this.getAllTasks().subscribe(res => this.tasks = res);
    console.log('odavde')
    console.log(this.tasks.length)
    return {
      ...this.tasks.find(task => {
        return task.TaskId === taskId;
        console.log(task.Title)
      })
    };
  }
}
