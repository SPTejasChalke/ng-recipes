import { Injectable } from '@angular/core';

interface dataStruct{
  name:string, quantity:number, id:string;
}

@Injectable({
  providedIn: 'root'
})
export class ShopdataService {

  shopList: dataStruct[]=[];

  constructor() { }

  updateData(data: dataStruct[]){
    this.shopList = data;
  }
  updateList(id: string, name: string, quantity: number){
    console.log(this.shopList);
    this.shopList.map((item)=>{
      if(item.id===id){
        item.name = name;
        item.quantity = quantity;
      }
      return item;
    });
    console.log(this.shopList);
  }
}
