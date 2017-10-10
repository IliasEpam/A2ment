import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ment-breadcrumbs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})

export class BreadcrumbsComponent { 
  public items: string[] = ['courses', 'course'];
}
