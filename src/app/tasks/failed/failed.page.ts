import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-failed',
  templateUrl: './failed.page.html',
  styleUrls: ['./failed.page.scss'],
})
export class FailedPage implements OnInit {
  failedTasks: Task[];
  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    this.getFailedTasks();
  }
  getFailedTasks(): void{
    this.tasksService.getFailedTasks()
        .subscribe(failedTasks => this.failedTasks = failedTasks);
  }

}
