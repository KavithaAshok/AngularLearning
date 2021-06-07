import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { ResponsiveComponent } from './responsive/responsive.component';
import { TestComponent } from './test/test.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: '', redirectTo: 'employees', pathMatch: 'full' },
      { path: 'employees', component: EmployeesComponent },
      { path: 'update', component: UpdateComponent },
      { path: 'responsive', component: ResponsiveComponent },
      { path: 'test', component: TestComponent }
    ],
  },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
