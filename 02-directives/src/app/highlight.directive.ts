import { Directive, ElementRef, Renderer, HostListener, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[dirHighlight]'
})
export class HighlightDirective {
  @HostListener('mouseenter') mouseover() {
    this.backgroundColor = this.highlightColor;
  };
  @HostListener('mouseleave') mouseleave() {
    this.backgroundColor = this.defaultColor;
  };
  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  };
  @HostListener('click', ['$event']) onClick(event) {
    console.log("Event Target", event.target);
  }
  @Input() defaultColor = 'white';
  @Input('dirHighlight') highlightColor = 'blue';

  private backgroundColor = this.defaultColor;

  constructor() {

  }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

  /*constructor(private elementRef: ElementRef, private renderer: Renderer) {
    //this.elementRef.nativeElement.style.backgroundColor = 'blue';
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'blue'); // does the same as above for html, but also changes style for apps
  }*/

}
