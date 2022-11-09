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
import { ProjectsAdminVueComponent } from './components/projects-admin/childs-dumb-components/projects-admin-vue.component';
import { ProjectsAdminCreatorComponent } from './components/projects-admin/childs-dumb-components/projects-admin-creator.component';
import { ProjectsAdminDetailComponent } from './components/projects-admin/childs-dumb-components/projects-admin-detail.component';
import { ProjectAdminAttributeCreatorComponent } from './components/projects-admin/childs-dumb-components/projects-admin-attribute-creator.component';
import { AttributesAdminService } from './services/attributes-admin.service';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { FilterSearchComponent } from './components/filter-search/filter-search.component';

@NgModule({
  declarations: [
    AttributesAdminComponent,
    ProjectsAdminComponent,
    ProjectsAdminVueComponent,
    ProjectsAdminCreatorComponent,
    ProjectAdminAttributeCreatorComponent,
    ProjectsAdminDetailComponent,
    SettingsComponent,
    SearchFilterPipe,
    FilterSearchComponent
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
    ProjectsAdminVueComponent,
    ProjectsAdminCreatorComponent,
    ProjectAdminAttributeCreatorComponent,
    ProjectsAdminDetailComponent,
    SettingsComponent,
  ],
  providers: [ProjectAdminService, AttributesAdminService] //Inject the services to the components constructor (if they have declared it) of this module
})
export class AdminModule {}
