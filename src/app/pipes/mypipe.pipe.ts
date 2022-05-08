import { Pipe, PipeTransform ,Injectable} from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(value: Date): string {
   
    return value.toDateString().substring(0, 10)
  }

}
