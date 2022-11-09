import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Project } from "src/app/models/project.interface";

@Component({
    selector: 'projects-admin-vue',
    styleUrls: [],
    template: `
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
    `
})
export class ProjectsAdminVueComponent {
    @Input()
    projects: Project[] = [];

    @Output()
    selectProjectEvent: EventEmitter<Project> = new EventEmitter<Project>();

    @Output()
    removeProjectEvent: EventEmitter<number> = new EventEmitter<number>();

    constructor() {}

    protected changeSelectedProject(projectToSelect: Project): void {
      this.selectProjectEvent.emit(projectToSelect);
    }

    protected removeProject(projectIdToRemove: number): void {
      this.removeProjectEvent.emit(projectIdToRemove);
    }
}