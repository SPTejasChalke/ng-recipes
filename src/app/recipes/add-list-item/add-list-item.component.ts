import { Component } from '@angular/core';
import { ReceipedataService } from 'src/app/recipedata.service';

@Component({
  selector: 'app-add-list-item',
  templateUrl: './add-list-item.component.html',
  styleUrls: ['./add-list-item.component.css']
})
export class AddListItemComponent {
  name: string="";
  url: string="";
  desc: string="";
  ingredients: string[]=[];
  rating: number=1;

  constructor(private serviceData: ReceipedataService){
    
  }

  onSubmit(): void{
    this.name = (<HTMLInputElement>document.getElementsByClassName("name")[0]).value;
    this.url = (<HTMLInputElement>document.getElementsByClassName("image")[0]).value;
    this.desc = (<HTMLInputElement>document.getElementsByClassName("desc")[0]).value;
    this.rating = Math.floor(parseFloat((<HTMLInputElement>document.getElementsByClassName("rating")[0]).value));
    this.ingredients = (<HTMLInputElement>document.getElementsByClassName("ingredients")[0]).value.split(",");
    for (let index = 0; index < this.ingredients.length; index++) {
      this.ingredients[index] = this.ingredients[index].trim();
    }
    this.serviceData.addData({name: this.name, desc: this.desc, img: this.url, ingredients: ["i1", "i2"], rating: this.rating})
    this.serviceData.logData();
  }
}
