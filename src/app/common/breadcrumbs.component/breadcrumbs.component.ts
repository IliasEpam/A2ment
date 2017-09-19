import { Component } from '@angular/core';

@Component({
  selector: 'ment-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})

export class BreadcrumbsComponent { 
  public items: string[] = ['courses', 'course'];
}
