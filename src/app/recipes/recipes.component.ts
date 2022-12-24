import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReceipedataService } from '../recipedata.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  data:{name: string, desc: string, img: string, ingredients: string[], rating: number}[] = [];

  constructor(private receipesdata: ReceipedataService, private router: Router) {
    this.data = receipesdata.recipeData;
  }

  ngOnInit(): void {
  }

  navigateTo(data:{name: string, desc: string, img: string, ingredients: string[], rating: number}):void{
    this.router.navigate(['/recipes/recipedetail'], {state: data});
  }
}
