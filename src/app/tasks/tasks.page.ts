import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from './task.model';
import { TasksService } from './tasks.service';
import {observableToBeFn} from 'rxjs/internal/testing/TestScheduler';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit {
  tasks: Observable<Task[]>  = of([]);
  constructor(private router: Router, private tasksService: TasksService, private route: ActivatedRoute) {
    this.route.params.subscribe(params =>{
      this.getTasks();
    })
  }

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
