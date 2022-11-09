import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { AttributeType } from "src/app/models/attribute-types.enum";
import { Attribute, NewAttribute } from "src/app/models/attribute.interface";
import { Project } from "src/app/models/project.interface";
import { getDefaultValueByAttributeType, getTodayDateFormatted, getValueInputType } from "../projects-admin.utility";

@Component({
    selector: 'projects-admin-detail',
    styleUrls: [],
    template: `
    <div id="projects-admin-detail" *ngIf="selectedProject">
        <h1>
          Detail for project ID N°{{ selectedProject.id }}
          <input
            type="button"
            (click)="toggleEditMode()"
            [value]="isEditMode ? 'Save' : 'Edit'"
          />
        </h1>
        <table>
          <tr>
            <th>Id</th>
            <td>{{ selectedProject.id }}</td>
          </tr>
          <tr>
            <th>Name</th>
            <td>
              <form #form="ngForm">
                <input
                  name="name"
                  #name="ngModel"
                  type="text"
                  [disabled]="!isEditMode"
                  [(ngModel)]="selectedProject.name"
                />
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
                    {{ attribute.id == -1 ? "New" : attribute.id }}
                    <input
                      name="attrId"
                      #attrId="ngModel"
                      type="hidden"
                      [(ngModel)]="attribute.id"
                    />
                    <input
                      *ngIf="isEditMode"
                      type="button"
                      value="Remove"
                      (click)="removeAttribute(attribute.id)"
                    />
                  </td>
                  <td>
                    <input
                      name="attrName"
                      #attrName="ngModel"
                      type="text"
                      [disabled]="!isEditMode"
                      [(ngModel)]="attribute.name"
                    />
                  </td>
                  <td>
                    <input
                      name="attrValue"
                      #attrValue="ngModel"
                      [type]="getValueInputType(attribute.valueType)"
                      [disabled]="!isEditMode"
                      [(ngModel)]="attribute.value"
                      [value]="attribute.value"
                      (change)="attribute.valueType == 'BOOLEAN' ? editProjectCheckboxChange($event, attribute.id) : undefined"
                      [checked]="attribute.valueType == 'BOOLEAN' && attribute.value == '1'? 'checked' : ''"
                    />
                    <!-- Note: change and check only useful for checkboxes (attributes of type BOOLEAN), as I did a custom implementation -->
                  </td>
                  <td>
                    <select
                      name="attrValueType"
                      #attrValueType="ngModel"
                      [disabled]="!isEditMode"
                      [(ngModel)]="attribute.valueType"
                      (change)="clearAttributeValue(attribute.id)"
                    >
                      <option
                        *ngFor="let attributeType of attributeTypes"
                        [value]="attributeType"
                      >
                        {{ attributeType }}
                      </option>
                    </select>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr *ngIf='isEditMode'>
            <th>New Attribute(s)</th>
            <projects-admin-attribute-creator (newAttributeAddedEvent)='addAttributeToNewProject($event)'>
            </projects-admin-attribute-creator>
        </tr>
        </table>
      </div>
    `
})
export class ProjectsAdminDetailComponent {

    @Input()
    selectedProject: Project | undefined = undefined;

    protected isEditMode = false;

    protected attributeTypes: string[] = Object.keys(AttributeType);

    @Output()
    updateProjectEvent: EventEmitter<Project> = new EventEmitter<Project>();

    constructor() {}

    protected toggleEditMode() {
        if (this.isEditMode && this.selectedProject != undefined) {
            this.updateProjectEvent.emit(this.selectedProject);
                this.selectedProject.attributes = this.selectedProject.attributes;
        }
        this.isEditMode = !this.isEditMode;
    }

    protected removeAttribute(attributeIdToRemove: number) {
        if (
          this.selectedProject &&
          confirm(
            `Remove the attribute ${attributeIdToRemove} from project ${this.selectedProject.id}?`
          )
        ) {
          this.selectedProject.attributes = this.selectedProject.attributes.filter(
            (attribute) => attribute.id != attributeIdToRemove
          );
        }
    }

    //checkbox are not exactly conform with ngModel so I decided to handle it by myself here
    protected editProjectCheckboxChange(event: any, attributeId: number) {
        if (this.selectedProject) {
            this.selectedProject.attributes = this.selectedProject.attributes.map(
                (attribute) => {
                if (attribute.id == attributeId) {
                    attribute.value =  event.target.checked ? '1' : '0';
                }
                return attribute;
                }
            )
        }
      }

    protected clearAttributeValue(attributeId: number) {
        if (this.selectedProject) {
          this.selectedProject.attributes = this.selectedProject.attributes.map(
            (attribute) => {
              if (attribute.id == attributeId) {
                attribute.value = getDefaultValueByAttributeType(attribute.valueType);
              }
              return attribute;
            }
          )
        }
    }

    protected addAttributeToNewProject(newAttribute: NewAttribute) {
        if (this.selectedProject) {           
            const attributeWithIdToBeGenerated: Attribute = {id: -1, ...newAttribute};
            this.selectedProject.attributes.push(Object.assign({}, attributeWithIdToBeGenerated));
        }
    }

    protected getValueInputType(attributeType: AttributeType) {
        return getValueInputType(attributeType);
    }
}