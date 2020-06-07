import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from '../tasks.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.page.html',
  styleUrls: ['./task-detail.page.scss'],
})
export class TaskDetailPage implements OnInit {

  loadedTask: Task;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private tasksService: TasksService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('taskId')) {
        this.router.navigate(['/tasks']);
        return;
      }

      const taskId = paramMap.get('taskId');
      this.loadedTask = this.tasksService.getTask(parseInt(taskId));
      console.log(this.loadedTask)
    });
  }

}