import { Component, EventEmitter, Output } from '@angular/core';
import { AttributeType } from 'src/app/models/attribute-types.enum';
import { NewAttribute } from 'src/app/models/attribute.interface';
import { NewProject } from 'src/app/models/project.interface';
import { getValueInputType } from '../projects-admin.utility';

@Component({
  selector: 'projects-admin-creator',
  styleUrls: [],
  template: `
    <div id="projects-admin-creator">
      <form #addForm="ngForm" *ngIf="isAddMode">
        <h1>New project</h1>
        <table>
          <tr>
            <th>Name</th>
            <td>
              <input
                name="newProjectName"
                #newProjectName="ngModel"
                type="text"
                placeholder="MyProjectName"
                [(ngModel)]="newProject.name"
              />
            </td>
          </tr>
          <tr>
            <th>Attribute(s)</th>
            <td>
              <table>
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Value</th>
                </tr>
                <tr
                  *ngFor="let newProjectAddedAttribute of newProject.attributes"
                >
                  <td>{{ newProjectAddedAttribute.name }}</td>
                  <td>{{ newProjectAddedAttribute.valueType }}</td>
                  <td>{{ newProjectAddedAttribute.value }}</td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <th>New Attribute(s)</th>
            <projects-admin-attribute-creator (newAttributeAddedEvent)='addAttributeToNewProject($event)'>
            </projects-admin-attribute-creator>
          </tr>
        </table>
      </form>
      <input
        type="button"
        [value]="isAddMode ? 'Save' : 'Add'"
        (click)="toggleAddMode()"
      />
    </div>
  `,
})
export class ProjectsAdminCreatorComponent {

  protected newProject: NewProject = this.getDefaultNewProject();

  protected isAddMode: boolean = false;

  protected attributeTypes: string[] = Object.keys(AttributeType);

  @Output()
  saveEvent: EventEmitter<NewProject> = new EventEmitter<NewProject>();

  constructor() {}

  protected addAttributeToNewProject(newAttribute: NewAttribute) {
    this.newProject.attributes.push(Object.assign({}, newAttribute));
  }

  protected toggleAddMode() {
    if (this.isAddMode) {
      this.saveEvent.emit(this.newProject);
      this.newProject = this.getDefaultNewProject();
    }
    this.isAddMode = !this.isAddMode;
  }

  protected getValueInputType(attributeType: AttributeType) {
    return getValueInputType(attributeType);
  }
  
  private getDefaultNewProject(): NewProject {
    return { name: '', attributes: [] };
  }

}
