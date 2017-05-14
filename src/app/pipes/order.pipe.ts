import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(array: Array<any>, sortType: string, keyName: string): Array<any> {
    if (!sortType) { return array; }
    let key = keyName;
    if (keyName === null) {
      var keyNames = Object.keys(array);
      key = keyNames[0].toLowerCase();
    }

    // 오름차순
    if (sortType === 'asc') {
      array.sort((a, b) => { 
        if (a[key] < b[key]) { return -1; }
        if (a[key] > b[key]) { return 1; }
        return 0;
      });
    } else if (sortType === 'desc') {
      //내림차순
      array.sort((a, b) => {
        if (a[key] < b[key]) { return 1; }
        if (a[key] > b[key]) { return -1; }
        return 0;
      });
    }


    return array;
  }
}
