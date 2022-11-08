import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { AttributesAdminComponent } from './components/attributes-admin/attributes-admin.component';
import { ProjectsAdminComponent } from './components/projects-admin/projects-admin.component';
import { SettingsComponent } from './components/settings/settings.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectAdminService } from './services/projects-admin.service';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//import { ProjectsAdminVue } from './components/projects-admin/projects-admin-vue.component';

@NgModule({
  declarations: [
    AttributesAdminComponent,
    ProjectsAdminComponent,
   // ProjectsAdminVue,
    SettingsComponent
  ],
  imports: [
    BrowserModule, //default module needed anyway
    CommonModule, //all fundamentals basics Angular stuff like *ngIf, *ngFor, etc.
    AppRoutingModule,
    HttpClientModule,
    FormsModule //for forms using ngForm
  ],
  exports: [
    AttributesAdminComponent,
    ProjectsAdminComponent,
    SettingsComponent,
  ],
  providers: [ProjectAdminService] //Inject the services to the components constructor (if they have declared it) of this module
})
export class AdminModule {}
