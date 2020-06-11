import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "./auth/auth.guard";

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'tasks',
    children: [
      {
        path: '',
        loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksPageModule),
        canActivate: [AuthGuard]
      },
      {
        path: ':taskId',
        loadChildren: () => import('./tasks/task-detail/task-detail.module').then(m => m.TaskDetailPageModule),
        canActivate: [AuthGuard]
      }
    ], canActivate: [AuthGuard]
  },
  {
    path: 'add',
    loadChildren: () => import('./tasks/add-task/add-task.module').then(m => m.AddTaskPageModule),
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
