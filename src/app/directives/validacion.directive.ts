import { Directive, ElementRef, HostListener, Input } from '@angular/core';
@Directive({
  selector: '[inputValidate]'
})
export class ValidacionDirective {
  successClass : string[] = ['dark:border-green-500', 'dark:placeholder-green-500', 'focus:ring-green-500' , 'focus:border-green-500'];
  errorClass : string[] = ['dark:border-red-500', 'dark:placeholder-red-500', 'focus:ring-red-500', 'focus:border-red-500'];
  @Input() error : boolean = false;

  constructor(private element:ElementRef) { } //Tener referencia al input a traves de esas clase

  //Decorador que escucha un evento del DOM
  @HostListener('input') onInput(){
    const input = this.element.nativeElement;
    if(this.error){
      this.RemoveClass(input,this.errorClass);
      this.AddClass(input, this.successClass);
    }else if(this.error){
      this.RemoveClass(input,this.successClass);
      this.AddClass(input, this.errorClass);
    }
  }

  @HostListener('blur') onblur(){
    const input = this.element.nativeElement;
    if(!this.error){
      this.RemoveClass(input,this.successClass);
      this.AddClass(input, this.errorClass);
    }else if(this.error){
      this.RemoveClass(input,this.errorClass);
      this.AddClass(input, this.successClass);
    }
  }

  //Añade Clases al Input
  AddClass(elemento : any, array : string[]){
    for (let i=0; i<array.length; i++){
        elemento.classList.add(array[i]);
    }
  }
  //Elimina Clases al Input
  RemoveClass(elemento : any, array : string[]){
    for (let i=0; i<array.length; i++){
        elemento.classList.remove(array[i]);
    }
  }

}
