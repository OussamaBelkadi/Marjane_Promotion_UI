import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appHightlight]'
})
export class HightlightDirective {
  @HostListener('mouseout') outMouse(){
    this.highlight('yellow')
  }
  @HostListener('mouseenter') entreMouse(){
    this.highlight(this.appHightlight || 'red')
    this.changeText(this.appHightlight)
  }
  @HostListener('click') onclick(){
      this.changeText('test');
  }
  @Input() appHightlight = '';
  private changeText(text: string){
      this.el.nativeElement.textContent = text
  }
  private highlight(color: string){
    this.el.nativeElement.style.background = color;
  }

  constructor(private el: ElementRef) {
    // this.el.nativeElement.style.background = 'yellow'
    // this.el.nativeElement.style.border = '22px solid #000'
    this.el.nativeElement.type = 'number'
    this.el.nativeElement.value = 20;
    this.el.nativeElement.max = 20;
    this.el.nativeElement.min = 18;

  }


}
