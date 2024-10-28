import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertDependencies',
  standalone: true
})
export class ConvertDependenciesPipe implements PipeTransform {

  transform(dependencyCount:number|string): string {
    if(+dependencyCount==1){
      return  dependencyCount +' dependency'
    }
    else{
      return  dependencyCount +' dependencies'
    }
  }

}
