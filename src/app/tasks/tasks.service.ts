import { Injectable } from '@angular/core';
import { Task } from './task.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private Http: HttpClient) { }
  private urlad = 'https://localhost:44336/api/UserProfile/GetTask'
  tasks: Task[];

  getDataFromAPI() {
    this.Http.get('https://localhost:44336/api/UserProfile/GetTask').subscribe();
  }



  getAllTasks(): Observable<Task[]> {
    return this.Http.get<Task[]>(this.urlad)
  }



  getTask(taskId: number) {
    return {
      ...this.tasks.find(task => {
        return task.TaskId === taskId;
      })
    };
  }
}
