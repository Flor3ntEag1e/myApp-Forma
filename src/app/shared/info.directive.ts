import { Directive, OnChanges, SimpleChanges, HostListener } from '@angular/core';

@Directive({
  selector: '[appInfo]'
})
export class InfoDirective implements OnChanges {

 // @HostListener('click')

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

}
