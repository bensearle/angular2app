import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <button (click)="onClicked()">Click Me</button>
  `,
  styles: []
})
export class EventBindingComponent {
  @Output() clicked = new EventEmitter<string>();
  //@Output('clickable') clicked = new EventEmitter<string>(); // can use this to change the output name
  onClicked() {
    this.clicked.emit('it worked!');
  }

}
