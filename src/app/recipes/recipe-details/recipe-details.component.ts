import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit{

  receievedData: any;
  temp: number[];

  constructor(private router: Router){
    this.receievedData = this.router.getCurrentNavigation()?.extras.state;
    this.temp = Array(this.receievedData.rating).fill(0).map((x,i) => i);
  }

  ngOnInit(): void {
  }
}
