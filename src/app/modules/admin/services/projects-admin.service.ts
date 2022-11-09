import { Observable } from "rxjs";
import { NewProject, Project } from "src/app/models/project.interface";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class ProjectAdminService {

    private targetResourceUrl = 'http://localhost:8080/v1/projects';  // URL exposed by the server CoreAPI

    constructor(private http: HttpClient){}

    /**
     * GET projects from the server CoreAPI
     * @returns Project[] 
     */
    getProjects(): Observable<Project[]> {
        // @ts-ignore
        window.Buffer = window.Buffer || require('buffer').Buffer;

        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': 'Basic ' + window.Buffer.from('user:1234').toString('base64') //TODO: improve this, not hardcode, put it at this app level and transmit it
            })
        };

            return this.http.get<Project[]>(this.targetResourceUrl, httpOptions);
        };
        
        
    /**
     * GET a project by id from the server CoreAPI
     * @returns Project 
     */
    getProject(id: number): Observable<Project> {
        // @ts-ignore
        window.Buffer = window.Buffer || require('buffer').Buffer;

        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': 'Basic ' + window.Buffer.from('user:1234').toString('base64') //TODO: improve this, not hardcode, put it at this app level and transmit it
            })
        };
        return this.http.get<Project>(this.targetResourceUrl + "/" + id, httpOptions);
    }

    //TODO: refactore to use this only for creation, and use PUT for update
    
    /**
     * POST a project to the server CoreAPI
     * @returns Project 
     */
    postProject(project: Project | NewProject): Observable<Project> {
        // @ts-ignore
        window.Buffer = window.Buffer || require('buffer').Buffer;

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json',
                'Authorization': 'Basic ' + window.Buffer.from('user:1234').toString('base64') //TODO: improve this, not hardcode, put it at this app level and transmit it
            })
        };
        return this.http.post<Project>(this.targetResourceUrl, project, httpOptions);
    }

        /**
     * PUT a project to the server CoreAPI
     * @returns Project 
     */
         updateProject(project: Project ): Observable<Project> {
            // @ts-ignore
            window.Buffer = window.Buffer || require('buffer').Buffer;
    
            const httpOptions = {
                headers: new HttpHeaders({
                    'Content-Type':  'application/json',
                    'Authorization': 'Basic ' + window.Buffer.from('user:1234').toString('base64') //TODO: improve this, not hardcode, put it at this app level and transmit it
                })
            };
            return this.http.put<Project>(this.targetResourceUrl + "/" + project.id, project, httpOptions);
        }

     /**
     * DELETE a project to the server CoreAPI
     * @returns Project 
     */
    deleteProject(id: number): Observable<ArrayBuffer> {
        // @ts-ignore
        window.Buffer = window.Buffer || require('buffer').Buffer;

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json',
                'Authorization': 'Basic ' + window.Buffer.from('user:1234').toString('base64') //TODO: improve this, not hardcode, put it at this app level and transmit it
            })
        };
        return this.http.delete<ArrayBuffer>(this.targetResourceUrl + "/" + id, httpOptions);
    }
}