import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styles: [`
        .active {
            color: red;
            border: 1px solid black;
        }
    `]
})
export class AppComponent {
}
