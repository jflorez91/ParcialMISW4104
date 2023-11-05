import { Component, OnInit } from '@angular/core';
import { Cafe } from '../Cafe';
import { CafesService } from 'src/app/services/cafes.service';

@Component({
  selector: 'app-list-cafes',
  templateUrl: './list-cafes.component.html',
  styleUrls: ['./list-cafes.component.css']
})
export class ListCafesComponent implements OnInit {

  cafeList : Array<Cafe> = [];
  constructor(private cafesService : CafesService) { }

  ngOnInit(): void {
    this.getCafeList();
  }

  getCafeList(){
    this.cafesService.getCafes().subscribe(cafes =>{
      this.cafeList = cafes
    });
  }

  getGroupTypesCoffe(){
    let coffeTypes = new Array();
    let indCoffe = 0;

    this.cafeList.forEach(c=>{
      indCoffe+=1;
      coffeTypes[indCoffe] = c.tipo
    });
    
    indCoffe = 0;
    let type="";
    let groupTypeCoffe = new Array();

    coffeTypes.sort().forEach(c=>{
      if(type !== c){
        type = c;
        groupTypeCoffe[indCoffe] = c;
        indCoffe++;
      }
    });
    return groupTypeCoffe;
  }
  
  getTotalTypeCoffe(coffetypes: string){
    let totalTypeCoffe=0;
    this.cafeList.forEach( c=> {
      if(coffetypes == c.tipo){
        totalTypeCoffe++
      }
    });
    return totalTypeCoffe;
  }

}
