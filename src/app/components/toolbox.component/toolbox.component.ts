import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ment-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.scss']
})

export class ToolboxComponent {
  @Output() broadcastSearch: EventEmitter<string> = new EventEmitter<string>();
  public search: string = '';
  public startSearch(): void {
    this.broadcastSearch.emit(this.search);
  }
}
