import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'default'
})
export class DefaultPipe implements PipeTransform {

  transform(value: string, defaultImg:string) {
    if(value===''){
    value=defaultImg;
    }
    return value;
  }

}
