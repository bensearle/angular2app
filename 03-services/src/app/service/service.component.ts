import { Component } from '@angular/core';

import { DataService } from './data.service';

@Component({
  selector: 'svc-service',
  template: `
    <svc-cmp-a></svc-cmp-a>
    <svc-cmp-b></svc-cmp-b>
  `,
  providers: [DataService]
})
export class ServiceComponent {
}
