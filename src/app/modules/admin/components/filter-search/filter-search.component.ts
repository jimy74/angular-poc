import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'filter-search',
  styleUrls: ['./filter-search.component.scss'],
  template: `
    <div id="filter-search">
      <input
        #test="ngModel"
        class="searchTextInputs"
        type="text"
        placeholder="Search..."
        [ngModel]="searchText"
        (ngModelChange)="onSearchTextChange($event)"
      /> <!-- passing by the ngModelChange is better than change or keypress, because it is also triggered by text supression -->
    </div>
  `,
})
export class FilterSearchComponent {
  @Input()
  searchText: string = '';

  @Output()
  searchTextChangeEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  onSearchTextChange(searchTextInputValue: string) {
    console.log(searchTextInputValue);
    this.searchTextChangeEvent.emit(searchTextInputValue);
  }
}
