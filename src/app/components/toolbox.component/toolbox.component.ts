import { Component } from '@angular/core';

@Component({
  selector: 'ment-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.scss']
})

export class ToolboxComponent {
  public search: string = '';
  public startSearch(): void{
    console.log(this.search);
  }
}
