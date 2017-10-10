import { Component, Output, EventEmitter,ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ment-toolbox',
  templateUrl: './toolbox.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./toolbox.component.scss']
})

export class ToolboxComponent {
  @Output() broadcastSearch: EventEmitter<string> = new EventEmitter<string>();
  public search: string = '';
  public startSearch(): void {
    this.broadcastSearch.emit(this.search);
  }
}
