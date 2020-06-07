import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from './task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit {
  tasks: Task[];

  constructor(private router: Router, private tasksService: TasksService) { }

  ngOnInit() {
  this.getTasks();
  console.log(this.tasks)
  }
  getTasks(): void{
    this.tasksService.getAllTasks()
        .subscribe(tasks => this.tasks = tasks);
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
