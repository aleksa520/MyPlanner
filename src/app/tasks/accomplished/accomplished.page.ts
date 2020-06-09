import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-accomplished',
  templateUrl: './accomplished.page.html',
  styleUrls: ['./accomplished.page.scss'],
})
export class AccomplishedPage implements OnInit {
  accTasks: Task[];
  constructor( private tasksService: TasksService) { }
  ngOnInit() {
    this.getAccomplishedTasks();
  }
  getAccomplishedTasks(): void{
    this.tasksService.getAccTasks()
        .subscribe(accTasks => this.accTasks = accTasks);
  }

}
