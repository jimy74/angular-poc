import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttributesAdminComponent } from 'src/app/modules/admin/components/attributes-admin/attributes-admin.component';
import { NotFoundComponent } from 'src/app/components/not-found/not-found.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { ProjectsAdminComponent } from '../admin/components/projects-admin/projects-admin.component';
import { SettingsComponent } from '../admin/components/settings/settings.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectsAdminComponent },
  { path: 'attributes', component: AttributesAdminComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
