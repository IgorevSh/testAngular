import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {PackageCardComponent} from '../packageCard/package-card.component';
import axios from 'axios';
interface Package{
  id:string,
  weeklyDownloads:number|string,
  dependencyCount:number
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,CommonModule,PackageCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  list:Package[] = []
  highlights:string[] = []
  constructor() {
   this.updateList()
  }
  search =""
  updateList(){
    this.list=[]
    axios.get('http://localhost:3000/packages',{withCredentials:false}).then((res)=>{
      setTimeout(()=>{
        this.list=res.data
      },1500)
    })
  }
  get filteredBlocks(){
    return this.list.filter((itm:Package)=>{
      const regexp= new RegExp(`^${this.search.toLowerCase()}`,'gi')
      return itm?.id.toLowerCase().match(regexp)?.length||!this.search.trim().length
    })
  }
  findDependencies(itm:string){
    axios.get(`http://localhost:3000/packages/${itm.replace('/','%2F')}/dependencies`,{withCredentials:false}).then((res)=>{
      this.highlights=res.data
    })
  }
  clearDependencies(){
    this.highlights=[]
  }
  needToHighLight(id:string){
    return this.highlights.includes(id)
  }
}

