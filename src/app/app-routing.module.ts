import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectlistsComponent } from './views/projectlists/projectlists.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectlistsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
