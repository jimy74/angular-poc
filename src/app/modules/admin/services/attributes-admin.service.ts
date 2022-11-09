import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Attribute } from "src/app/models/attribute.interface";

@Injectable()
export class AttributesAdminService {

    private targetResourceUrl = 'http://localhost:8080/v1/attributes';  // URL exposed by the server CoreAPI

    constructor(private http: HttpClient){}

    /**
     * GET attributes from the server CoreAPI
     * @returns Attribute[] 
     */
    getAttributes(): Observable<Attribute[]> {
        // @ts-ignore
        window.Buffer = window.Buffer || require('buffer').Buffer;

        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': 'Basic ' + window.Buffer.from('user:1234').toString('base64') //TODO: improve this, not hardcode, put it at this app level and transmit it
            })
        };

            return this.http.get<Attribute[]>(this.targetResourceUrl, httpOptions);
        };
}