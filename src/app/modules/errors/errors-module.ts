import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ERRORS_ROUTES } from './errors-routing-module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(ERRORS_ROUTES)],
})
export class ErrorsModule {}
