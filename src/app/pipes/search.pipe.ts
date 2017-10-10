import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'searchPipe'})
export class SearchPipe implements PipeTransform {
    transform(items: any[], param: string): any[] {
        console.log(items);
        if ( param && param.trim()) {
            let newItems = [];
            for (let i = 0; i < items.length; i++) {
                if (items[i].title.indexOf(param) > -1) {
                    newItems.push(items[i]);
                }
            }
            newItems.sort()
            return newItems;
        } else {
            return items;
        }
    }
}