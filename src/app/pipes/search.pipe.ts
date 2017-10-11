import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'searchPipe'})
export class SearchPipe implements PipeTransform {
    transform(items: any[], param: string): any[] {
        if ( param && param.trim()) {
            let newItems = [];
            for (let i = 0; i < items.length; i++) {
                if (items[i].title.indexOf(param) > -1 && this.sortDate(items[i].date)) {
                    newItems.push(items[i]);
                }
            }
            newItems.sort();
            return newItems;
        } else if (items) {
            let newItems = [];
            for (let i = 0; i < items.length; i++) {
                if (this.sortDate(items[i].date)) {
                    newItems.push(items[i]);
                }
            }
            return newItems;
        } else {
            return items;
        }
    }

    sortDate(date: string): boolean {
        let dateObj = new Date(date);
        let currentDate = new Date();
        currentDate.setDate(currentDate.getDate() - 14);
        return currentDate > dateObj;
    }
}