import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NewProject, Project } from 'src/app/models/project.interface';
import { AttributeType } from 'src/app/models/attribute-types.enum';
import { ProjectAdminService } from '../../services/projects-admin.service';
import { Attribute, NewAttribute } from 'src/app/models/attribute.interface';
@Component({
  selector: 'projects-admin',
  styleUrls: ['./projects-admin.component.scss'],
  template: `
    <div id="projects-admin">
    <div id="projects-admin-vue">
        <h1>Projects administration dashboard</h1>
        <p>Here you can manage the projects all simplicity!</p>
        <table>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Attributes</th>
          </tr>
          <tr *ngFor='let project of projects;'>
            <td>{{project.id}}</td>
            <td>{{project.name}}</td>
            <td>
              <input type="button" (click)="changeSelectedProject(project)" value="See detail">
              <input type="button" (click)="removeProject(project.id)" value="Remove">
            </td>
          </tr>
        </table>
      </div>

      <form #addForm="ngForm" *ngIf='isAddMode'>
        <h1>New project</h1>
        <table>
          <tr>
            <th>Name</th>
            <td><input name="newProjectName" #newProjectName='ngModel' type="text" placeholder="MyProjectName" [(ngModel)]='newProject.name'></td>
          </tr>
          <tr>
            <th>Attribute(s)</th> 
            <td>
              <table>
                <tr><th>Name</th><th>Type</th><th>Value</th></tr>
                <tr *ngFor='let newProjectAddedAttribute of newProject.attributes'>
                  <td>{{newProjectAddedAttribute.name}}</td><td>{{newProjectAddedAttribute.valueType}}</td><td>{{newProjectAddedAttribute.value}}</td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>  
            <th>New Attribute(s)</th>  
            <td>
            <table>
                <tr><th>Name</th><th>Type</th><th>Value</th></tr>
                <tr>
                  <td>
                  <input [value]='newAttribute.name' (change)='onNewAttributeNameChange($event)' placeholder="MyAttributeName">
                  </td>
                  <td>
                    <select name="attrValueType" (change)='onNewAttributeTypeChange($event)'>
                      <option *ngFor='let attributeType of attributeTypes'>{{attributeType}}</option>                         
                    </select>
                  </td>
                  <td>
                  <input
                  [type]='getValueInputType(newAttribute.valueType)'
                  [value]='newAttribute.value'
                  (change)='onNewAttributeValueChange($event);
                  (newAttribute.valueType == "BOOLEAN") ? newProjectCheckboxChange($event) : undefined'>
                  </td>
                </tr>
              </table>
            <input type="button" value="Add" (click)='addAttributeToNewProject()'>  
          </td>
          </tr>
        </table>
      </form>
      <input type="button" [value]='isAddMode ? "Save" : "Add"' (click)='toggleAddMode()'>


      <div id="projects-admin-detail" *ngIf="selectedProject">
          <h1>
            Detail for project ID N°{{selectedProject.id}}
            <input type="button" (click)='toggleEditMode()' [value]='isEditMode ? "Save" : "Edit"'>
          </h1>
          <table>
            <tr>
              <th>Id</th>
              <td>{{selectedProject.id}}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>
                <form #form="ngForm">
                  <input name="name" #name="ngModel" type="text" [disabled]='!isEditMode' [(ngModel)]='selectedProject.name'>
                </form>
              </td>
            </tr>
            <tr>
              <th>Attributes</th>
              <td>
                <table id="table-project-detail-attributes">  
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Value</th>
                  </tr>
                  <tr *ngFor="let attribute of selectedProject.attributes">
                    <td>
                      {{attribute.id}}
                      <input name="attrId" #attrId='ngModel' type="hidden" [(ngModel)]='attribute.id'>
                      <input *ngIf='isEditMode' type="button" value="Remove" (click)='removeAttribute(attribute.id)'>
                    </td>
                    <td><input name="attrName" #attrName='ngModel' type="text" [disabled]='!isEditMode' [(ngModel)]='attribute.name'></td>
                    <td>
                      <input 
                      name="attrValue" 
                      #attrValue='ngModel' 
                      [type]='getValueInputType(attribute.valueType)' 
                      [disabled]='!isEditMode' 
                      [(ngModel)]='attribute.value'
                      [value]='attribute.value'
                      (change)='(attribute.valueType == "BOOLEAN") ? editProjectCheckboxChange(attribute.id) : undefined' 
                      [checked]='attribute.valueType == "BOOLEAN" &&  attribute.value == "1" ? "checked" : "" '>
                      <!-- Note: change and check only useful for checkboxes (attributes of type BOOLEAN), as I did a custom implementation -->
                    </td>
                    <td>
                      <select name="attrValueType" #attrValueType='ngModel' [disabled]='!isEditMode' [(ngModel)]='attribute.valueType' (change)='clearAttributeValue(attribute.id)'>
                        <option *ngFor='let attributeType of attributeTypes' [value]='attributeType'>{{attributeType}}</option>                         
                      </select>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
      </div>
    </div>
    <router-outlet></router-outlet>
  `,
})
export class ProjectsAdminComponent implements OnInit {

  projects: Project[] = [];
  attributeTypes: string[] = Object.keys(AttributeType);
  selectedProject: Project | undefined = undefined;
  isEditMode = false;
  isAddMode = false;
  newProject: NewProject = {name: '', attributes: []};
  newAttribute: NewAttribute = {name: '', value: '', valueType: AttributeType.TEXT};

  constructor(private router: Router, private route: ActivatedRoute, private projectAdminService: ProjectAdminService){}

  ngOnInit(): void {
    this.projectAdminService.getProjects().subscribe(projects => {
      console.log(projects);
      this.projects = Object.assign([], projects);
    });
  }

  changeSelectedProject(projectToSelect: Project): void {
    this.selectedProject = Object.assign({}, projectToSelect);
  }

  toggleEditMode() 
  {
    if(this.isEditMode && this.selectedProject != undefined) {
      this.projectAdminService.postProject(this.selectedProject).subscribe(project =>
          {
            this.selectedProject = Object.assign({}, project);
            this.projects = this.projects.map(project =>
             this.selectedProject &&  project.id == this.selectedProject.id ? this.selectedProject : project
            );
          }
        );
    }
    this.isEditMode = !this.isEditMode;
  }

  getValueInputType(attributeType: AttributeType) {
    switch(attributeType) {
      case AttributeType.TEXT: return 'text';
      case AttributeType.NUMBER: return 'number';
      case AttributeType.BOOLEAN: return 'checkbox';
      case AttributeType.DATE: return 'date';
    }
  }

  removeAttribute(attributeIdToRemove: number) {
    if(this.selectedProject && confirm(`Remove the attribute ${attributeIdToRemove} from project ${this.selectedProject.id}?`)) {
      this.selectedProject.attributes = this.selectedProject.attributes.filter(attribute =>
        attribute.id != attributeIdToRemove
        );
    }
  }

  //checkbox are not exactly conform with ngModel so I decided to handle it by myself here
  editProjectCheckboxChange(attributeId: number){
    if ( this.selectedProject) {
      this.selectedProject.attributes = this.selectedProject.attributes.map(attribute => {
        if (attribute.id == attributeId && attribute.valueType == AttributeType.BOOLEAN) {
          attribute.value = attribute.value == "1" ? "0" : "1"; //inverse it on purpose
        }
        return attribute;
      });
      this.projects = this.projects.map(project =>
        this.selectedProject &&  project.id == this.selectedProject.id ? this.selectedProject : project
       );
    }
  }

  removeProject(projectIdToRemove: number) {
    if (confirm(`Remove the project ${projectIdToRemove}?`)){
      this.projectAdminService.deleteProject(projectIdToRemove).subscribe(result =>
        this.projects = this.projects.filter(project =>
          project.id != projectIdToRemove
        )
      );
    }
  }

  toggleAddMode() {
    if (this.isAddMode) {
      this.postNewProject();
    }
    this.isAddMode = !this.isAddMode;
  }

  clearAttributeValue(attributeId: number) {
    if (this.selectedProject) {
      this.selectedProject.attributes = this.selectedProject.attributes.map(attribute =>
        {
          if (attribute.id == attributeId) {
            console.log("attribute.id ", attribute.id);
            attribute.value = attribute.valueType == AttributeType.DATE ? this.getTodayDateFormatted() : '';
          }
          return attribute;
        }
      );
    }
  }

  onNewAttributeTypeChange(event: any){
    this.newAttribute.valueType = event.target.value;
    this.clearNewAttributeValue();
  }

  onNewAttributeValueChange(event: any){
    this.newAttribute.value = event.target.value;
  }

  onNewAttributeNameChange(event: any) {
    this.newAttribute.name = event.target.value;
  }

  addAttributeToNewProject() {
    this.newProject.attributes.push(Object.assign({}, this.newAttribute));
  }

  newProjectCheckboxChange(event: any){
    this.newAttribute.value = event.target.checked ? "1" : "0";
  }

  postNewProject() {
    this.projectAdminService.postProject(this.newProject).subscribe()
  }

  private clearNewAttributeValue() {
    if (this.newAttribute) {
      this.newAttribute.value = this.newAttribute.valueType == AttributeType.DATE ? this.getTodayDateFormatted() : '';
    }
  }

  private getTodayDateFormatted(): string {
    return new Date().toISOString().slice(0, 10);
  }
}
