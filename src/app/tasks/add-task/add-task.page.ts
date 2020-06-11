import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {AlertController} from "@ionic/angular";
import {TasksService} from '../tasks.service';

@Component({
  selector: 'add',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
})
export class AddTaskPage implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router,
              private Http: HttpClient, public alertController: AlertController) {
    this.TaskForm = this.formBuilder.group({
      taskTitle: new FormControl('', Validators.compose([
        Validators.required
      ])),
      taskDescription: new FormControl('', Validators.compose([
        Validators.required
      ])),
      taskDays: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });
  }
  readonly BaseURL = 'https://localhost:44336/api';
  TaskForm: FormGroup;

  taskTitles: string;
  taskDescriptions: string;
  taskDayss: number;

  ngOnInit() {
  }

  async addPlanAlert() {
    const alert = await this.alertController.create({

      subHeader: 'Task ' + this.taskTitles + ' added!',
      buttons: ['OK']
    });

    await alert.present();
  }

  addPlan() {
    const body = {
      Title: this.taskTitles,
      Description: this.taskDescriptions,
      Days: this.taskDayss,
      UserName : 'aleksa12'
    };
    return this.Http.post(this.BaseURL + '/UserProfile/AddTask', body, {observe: 'response'});
  }

  clearTask() {
     this.taskDescriptions = '';
     this.taskTitles = '';
     this.taskDayss = null;
  }


  onsubmit() {
    this.addPlan().subscribe(
        (res: any) => {
          if (res.status == 200) {
            this.addPlanAlert();
            this.router.navigate(['/tasks']);
            }
        });

  }

}
