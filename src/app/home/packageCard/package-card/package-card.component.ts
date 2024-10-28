import { Component ,Input, Output,EventEmitter} from '@angular/core';
import {ConvertDownloadsPipe} from '../../../../pipes/convert-downloads.pipe';
import {ConvertDependenciesPipe} from '../../../../pipes/convert-dependencies.pipe';

@Component({
  selector: 'package-card',
  standalone: true,
  imports: [ConvertDownloadsPipe,ConvertDependenciesPipe],
  templateUrl: './package-card.component.html',
  styleUrl: './package-card.component.css'
})
export class PackageCardComponent {
  @Output() findDependencies = new EventEmitter<any>();
  @Output() clearDependencies = new EventEmitter<any>();
  @Input() item:any={id:'',dependencyCount:0,weeklyDownloads:''};
  @Input() highlight:boolean=false;
  get formatItem(){
    return this.item?.id?.split('/')
  }
  mouseEnter(){
    this.findDependencies.emit(this.item?.id)
  }
  mouseLeave(){
    this.clearDependencies.emit()
  }
}
