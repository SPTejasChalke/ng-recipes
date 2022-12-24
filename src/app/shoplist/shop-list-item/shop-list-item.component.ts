import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { ShopdataService } from 'src/app/shopdata.service';

interface dataStruct{
  name:string, quantity:number, id:string;
}

@Component({
  selector: 'app-shop-list-item',
  templateUrl: './shop-list-item.component.html',
  styleUrls: ['./shop-list-item.component.css', '../../../assets/font6/css/all.css']
})
export class ShopListItemComponent implements OnInit {
  @Input() data:dataStruct;

  @Output() clickedData = new EventEmitter<{name:string, quantity:number, opr:string}>();
  @Output() showMessage = new EventEmitter<boolean>();
  hidden: boolean= true;
  inputName: string="";
  inputQuantity: number=0;
  n1: string;
  q1: number;

  constructor(private shopservice: ShopdataService){
    this.data = {name:'', quantity:0, id: ""};
    this.n1 = this.data.name;
    this.q1 = this.data.quantity;
  }
  
  ngOnInit(): void {
    this.n1 = this.data.name;
    this.q1 = this.data.quantity;
  }

  increaseItem(): void{
    this.clickedData.emit({...this.data, opr: "increase"});
  }

  decreaseItem():void{
    this.clickedData.emit({...this.data, opr: "decrease"});
  }

  removeItem(): void{
    this.clickedData.emit({...this.data, opr: "remove"});
  }

  editItem(id: string): void{
    // this.inputName = (<HTMLInputElement>document.getElementsByClassName("name")[0]).value;
    // this.inputQuantity = parseInt((<HTMLInputElement>document.getElementsByClassName("quantity")[0]).value);
    console.log(id);
    this.shopservice.updateList(id, this.n1, this.q1);
    this.showMessage.emit(true);
  }

}
