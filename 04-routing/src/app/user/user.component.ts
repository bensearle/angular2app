import { Component, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rsjx/RX';
@Component({
  selector: 'app-user-component',
  template: `
      <h1>User Component</h1>
      <a [routerLink]="['../']">Home</a>
      <button (click)="onNavigate()">Go Home</button>
      <hr>
      {{id}}
      <hr>
      <router-outlet></router-outlet>
    `
})
export class UserComponent implements OnDestroy {
  private subscription: Subscription;
  id: string;

  constructor (private router: Router, private activatedRoute: ActivatedRoute) {
    this.subscription = activatedRoute.params.subscribe (
      (param: any) => this.id = param["id"]
    ); 
  };
  onNavigate() {
    this.router.navigate(['/'], {queryParams: {analytics: 100}, fragment: 'section1'});
  }
  ngOnDestroy() {
    this.subscription.unsubscribe(); // ActivatedRoute is automatically unsubscribed
  };
}
