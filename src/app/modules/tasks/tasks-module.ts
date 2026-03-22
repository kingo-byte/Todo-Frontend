import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TASKS_ROUTES } from './tasks-routing-module';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(TASKS_ROUTES)],
})
export class TasksModule {}
