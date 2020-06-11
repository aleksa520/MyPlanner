import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from '../tasks.service';
import { Task } from '../task.model';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.page.html',
  styleUrls: ['./task-detail.page.scss'],
})
export class TaskDetailPage implements OnInit {

  loadedTask: Task;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private Http: HttpClient, private tasksService: TasksService) { }

   ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('taskId')) {
        this.router.navigate(['/tasks']);
        return;
      }

      let taskId = paramMap.get('taskId');
      this.tasksService.getTask(Number(taskId)).subscribe((res) =>{
        this.loadedTask = res;
        console.log(this.loadedTask);
      });
    });
  }
  buttonFailed() {
    this.tasksService.failedTask(this.loadedTask.TaskId).subscribe();
  }
  buttonSuccess(){
    this.tasksService.successTask(this.loadedTask.TaskId).subscribe();
  }


}
