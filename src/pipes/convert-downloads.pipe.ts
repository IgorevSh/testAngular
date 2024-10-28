import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertDownloads',
  standalone: true
})
export class ConvertDownloadsPipe implements PipeTransform {

  transform(downloadCount:number|string): string {
    if(+downloadCount>1000000){
      return  Math.trunc((+downloadCount)/1000000)+'M'
    }
    if(+downloadCount>1000){
      return  Math.trunc((+downloadCount)/1000)+'K'
    }
    return String(downloadCount)
  }

}
