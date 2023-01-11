import { Directive, ElementRef, HostListener} from '@angular/core';


@Directive({
  selector: '[isNumber]'
})
export class ValidacionNumeroDirective {

  constructor(private element:ElementRef){ }

  @HostListener('input',['$event'])
  onChangeInput(event: Event): void{
    const numberOnly = /[^0-9]*/g;
    const initValue = this.element.nativeElement.value;
    this.element.nativeElement.value = initValue.replace(numberOnly,'');
    if(initValue !== this.element.nativeElement.value){
      event.stopPropagation();
    }
  }
}
