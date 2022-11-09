import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Attribute } from 'src/app/models/attribute.interface';
import { AttributesAdminService } from '../../services/attributes-admin.service';

@Component({
  selector: 'attributes-admin',
  styleUrls: ['./attributes-admin.component.scss'],
  template: `
    <div id="attributes-admin">
      <h1>Attributes administration dashboard</h1>
      <p>Here you can have a global overview on every attributes.</p>
    </div>
    <h2>List of all attributes</h2>
    <filter-search [searchText]='searchText' (searchTextChangeEvent)='onSearchTextChange($event)'></filter-search>
    <table>
      <tr>
        <th>Id</th><th>Name</th><th>Value</th><th>Type</th>
      </tr>
      <tr *ngFor='let attribute of attributes | searchFilter: searchText'>
      <td>{{attribute.id}}</td><td>{{attribute.name}}</td><td>{{attribute.value}}</td><td>{{attribute.valueType}}</td>
      </tr>
    </table>
    <router-outlet></router-outlet>
  `,
})
export class AttributesAdminComponent implements OnInit {

  protected attributes: Attribute[] = [];

  protected searchText: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private attributesAdminService: AttributesAdminService
  ) {}

  ngOnInit(): void {
    this.attributesAdminService.getAttributes().subscribe(attributes => {
      this.attributes = attributes;
    });
  }

  protected onSearchTextChange(seachTextInputValue: string) {
    this.searchText = seachTextInputValue;
  }

}
