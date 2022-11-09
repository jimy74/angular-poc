import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NewProject, Project } from 'src/app/models/project.interface';
import { AttributeType } from 'src/app/models/attribute-types.enum';
import { ProjectAdminService } from '../../services/projects-admin.service';
@Component({
  selector: 'projects-admin',
  styleUrls: ['./projects-admin.component.scss'],
  template: `
    <div id="projects-admin">
      <projects-admin-vue
        [projects]="projects"
        (selectProjectEvent)="changeSelectedProject($event)"
        (removeProjectEvent)="removeProject($event)"
      >
      </projects-admin-vue>

      <projects-admin-creator (saveEvent)='postNewProject($event)'>
      </projects-admin-creator>

      <projects-admin-detail [selectedProject]='selectedProject' (updateProjectEvent)='updateProject($event)'>
      </projects-admin-detail>
    </div>
    <router-outlet></router-outlet>
  `,
})
export class ProjectsAdminComponent implements OnInit {
  protected projects: Project[] = [];
  protected attributeTypes: string[] = Object.keys(AttributeType);
  protected selectedProject: Project | undefined = undefined;
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private projectAdminService: ProjectAdminService
  ) {}

  ngOnInit(): void {
    this.projectAdminService.getProjects().subscribe((projects) => {
      this.projects = Object.assign([], projects);
    });
  }

  protected changeSelectedProject(projectToSelect: Project): void {
    this.selectedProject = Object.assign({}, projectToSelect);
    this.selectedProject.attributes = this.selectedProject.attributes.sort((a, b) => a.id - b.id); //re order by id ASC (this fix a de ordering bug)
  }

  protected updateProject(projectUpdated: Project) {
    this.projectAdminService
      .updateProject(projectUpdated)
      .subscribe((projectUpdatedResult) => {
        this.changeSelectedProject(projectUpdatedResult);
        this.projects = this.projects.map((project) =>
          this.selectedProject && project.id == this.selectedProject.id
            ? this.selectedProject
            : project
        );
      });
  }

  protected removeProject(projectIdToRemove: number) {
    if (confirm(`Remove the project ${projectIdToRemove}?`)) {
      this.projectAdminService
        .deleteProject(projectIdToRemove)
        .subscribe(result =>
            (this.projects = this.projects.filter(
              (project) => project.id != projectIdToRemove
            ))
        );
    }
  }

  protected postNewProject(newProject: NewProject) {
    this.projectAdminService.postProject(newProject).subscribe(project =>
      this.projects.push(project)
    );
  }
}
