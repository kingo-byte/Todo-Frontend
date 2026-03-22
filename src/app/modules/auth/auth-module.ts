import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AUTH_ROUTES } from './auth-routing-module';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(AUTH_ROUTES)],
})
export class AuthModule {}
