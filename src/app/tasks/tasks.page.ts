import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from './task.model';
import { TasksService } from './tasks.service';
import {observableToBeFn} from 'rxjs/internal/testing/TestScheduler';
import {Observable, of} from 'rxjs';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit {
  tasks: Observable<Task[]>  = of([]);


  constructor(private router: Router, private tasksService: TasksService) { }

  ngOnInit() {
  this.getTasks();
  }
  getTasks() {
    this.tasksService.getAllTasks()
        .pipe(tasks => this.tasks = tasks);
  }
  goBack() {
    this.router.navigate(['/home']);
  }

  goToAddTask() {
    this.router.navigate(['/add']);
  }
  goToAcc() {
    this.router.navigate(['/tasks/accomplished']);
  }
  goToFailed() {
    this.router.navigate(['/tasks/failed']);
  }

}
