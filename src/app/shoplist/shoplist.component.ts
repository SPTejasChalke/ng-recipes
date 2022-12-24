import { Component } from '@angular/core';
import { nanoid } from 'nanoid';
import { ShopdataService } from '../shopdata.service';

interface dataStruct{
  name:string, quantity:number, id:string;
}
@Component({
  selector: 'app-shoplist',
  templateUrl: './shoplist.component.html',
  styleUrls: ['./shoplist.component.css']
})

export class ShoplistComponent {
  title = 'ng-shoplist';
  name:string;
  quantity:string;
  total:number;
  items:dataStruct[];
  hasChanged: boolean;
  
  constructor(private shopservie: ShopdataService){
    this.name = '';
    this.quantity = '';
    this.items = [{name: "Item1", quantity: 3, id:nanoid()},{name: "Item2", quantity: 2, id:nanoid()}];
    this.hasChanged = false;
    this.total=0;
    this.items.map((item) => {
      this.total += item.quantity;
    })
    this.shopservie.updateData(this.items);
  }

  addToList(): void{
    if(this.name.length > 0 && this.quantity.length > 0 && isFinite(parseInt(this.quantity))){
      this.hasChanged = false;

      this.items = this.items.map((item: dataStruct) => {
        if(item.name === this.name){
          this.hasChanged = true;
        }
        return item;
      })

      if(!this.hasChanged){
        this.items.push({name: this.name, quantity: parseInt(this.quantity), id:nanoid()});
        this.total = 0;
        this.items.map((item) => {
          this.total += item.quantity;
        })
      }
      this.shopservie.updateData(this.items);
    }else{
      window.alert("Please enter valid name and quantity!");
    }
    
  }

  updateList(): void{
    if(this.name.length > 0 && this.quantity.length > 0 && isFinite(parseInt(this.quantity))){
      this.hasChanged = false;

      this.items = this.items.map((item: dataStruct) => {
        if(item.name === this.name){
          item.quantity = item.quantity + parseInt(this.quantity);
          this.hasChanged = true;
        }
        return item;
      })

      if(!this.hasChanged){
        this.items.push({name: this.name, quantity: parseInt(this.quantity), id:nanoid()});
      }
      this.total = 0;
      this.items.map((item) => {
        this.total += item.quantity;
      })
      this.shopservie.updateData(this.items);
    }else{
      window.alert("Please enter valid name and quantity!");
    }
  }

  clearList(): void{
    this.items.splice(0, this.items.length);
    this.total = 0;
    this.shopservie.updateData(this.items);
  }

  removeItem(data:{name:string, quantity:number, opr:string}): void{
    if(data.opr === "remove"){
      for (let index = 0; index < this.items.length; index++) {
        const element = this.items[index];
        if(element.name === data.name){
          //remove the element
          this.items.splice(index, 1);
        }
      }
    }else if(data.opr === "increase"){
      for (let index = 0; index < this.items.length; index++) {
        const element = this.items[index];
        //find the element
        if(element.name === data.name){
          //increase the quantity
          this.items[index].quantity += 1;
        }
      }
    }else if(data.opr === "decrease"){
      for (let index = 0; index < this.items.length; index++) {
        const element = this.items[index];
        //find the element
        if(element.name === data.name){
          //decrease the quantity
          this.items[index].quantity -= 1;
          //remove it if quantity is less than 1
          if(this.items[index].quantity <= 0){
            this.items.splice(index, 1);
          }
        }
      }
    }
    this.total = 0;
    this.items.map((item) => {
      this.total += item.quantity;
    })
    this.shopservie.updateData(this.items);
  }


}
