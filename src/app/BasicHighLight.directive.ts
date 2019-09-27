import {Directive, ElementRef, OnInit , HostListener, Renderer2} from '@angular/core' ;

@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {

    constructor(private elementRef: ElementRef, private renderer: Renderer2  ) { }

    ngOnInit() {
 this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
// @HostListener('mouseenter') mouseover(EventData: Event) {
//     this.renderer.setStyle(this.elementRef.nativeElement, 'Background-color', 'blue');
// }

// @HostListener('mouseleave') mouseleave(EventData: Event) {
//     this.renderer.setStyle(this.elementRef.nativeElement, 'Background-color', 'transparent');
// }
}
