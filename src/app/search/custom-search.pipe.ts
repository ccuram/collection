import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customSearch'
})
export class CustomSearchPipe implements PipeTransform {

  transform(input: any, keyword: string, field: string = null, ignoreCase: boolean = false): any {
    if (field === null) { 
      return input;
    } else {
      if (ignoreCase) {
        keyword = keyword.toLowerCase();
        return input.filter(item => {
          if (item[field].toLowerCase().indexOf(keyword) != -1) {
            return item;
          } 
        });
      } else {
        return input.filter(item => {
          if (item[field].indexOf(keyword) != -1) {
            return item;
          }
        });
      }
    }
  }
}
