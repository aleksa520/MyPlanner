import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  private tasks: Task[] = [
    {
      id: 1,
      title: 'Trcanje svaki dan',
      description: 'Trcanje svaki dan po pola 30 minuta ujutru pre dorucka',
      daysLeft: 5,
    },
    {
      id: 2,
      title: 'Prestani pusiti cigare',
      description: 'Izdrzi da ne pusis mesec dana',
      daysLeft: 29
    }
  ];

  getAllTasks() {
    return [...this.tasks];
  }

  getTask(taskId: number) {
    return {
      ...this.tasks.find(task => {
        return task.id === taskId;
      })
    };
  }
}
