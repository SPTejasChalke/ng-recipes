import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReceipedataService } from '../recipedata.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css', '../../assets/font6/css/all.css']
})
export class RecipesComponent implements OnInit {

  data:{name: string, desc: string, img: string, ingredients: string[], rating: number}[] = [];
  featured:{name: string, desc: string, img: string, ingredients: string[], rating: number}[] = [];
  pos: number =0;

  constructor(private receipesdata: ReceipedataService, private router: Router) {
    this.data = receipesdata.recipeData;
    this.featured = receipesdata.featuredData;
  }

  ngOnInit(): void {
  }

  navigateTo(data:{name: string, desc: string, img: string, ingredients: string[], rating: number}):void{
    this.router.navigate(['/recipes/recipedetail'], {state: data});
  }

  changeFeatured(type: string): void{
    if(type==='left'){
      if(this.pos - 70 < -140){
        return;
      }
      this.pos -= 70;
    }else if(type==='right'){
      if(this.pos + 70 > 0){
        return;
      }
      this.pos += 70;
    }
  }
}
