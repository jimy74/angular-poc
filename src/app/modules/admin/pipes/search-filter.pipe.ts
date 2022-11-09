import { JsonPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any, arg: string): any {
    if (!value) return null;
    if (!arg || arg === '') return value;
    return value.filter((item: any) => {
      return JSON.stringify(item)
      .toLowerCase()
      .includes(arg.toLowerCase())
    });
  }

}
