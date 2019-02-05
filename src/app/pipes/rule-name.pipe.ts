import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ruleName'
})
export class RuleNamePipe implements PipeTransform {

  transform(value: any, tam? ): any {
    let size = ( tam )? tam: 3;
    return value.substring(size, value.lenght);
  }

}
