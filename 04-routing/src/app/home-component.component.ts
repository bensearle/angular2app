import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";

@Component({
  selector: 'app-home-component',
  template: `
    <h1>
      Home Component!
    </h1>
    <hr>
    {{param}}
    <div id="section1"></div>
  `,
  styles: []
})
export class HomeComponent implements OnDestroy {
  private subscription: Subscription;
 
  param: string;
 
  constructor(private route: ActivatedRoute) {
    this.subscription = route.queryParams.subscribe(
      (queryParam: any) => this.param = queryParam['analytics']
    );
    /*this.subscription = this.route.fragment.subscribe(
      fragment => console.log(fragment)
    );*/
  }
 
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
