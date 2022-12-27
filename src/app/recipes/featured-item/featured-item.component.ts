import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-featured-item',
  templateUrl: './featured-item.component.html',
  styleUrls: ['./featured-item.component.css']
})
export class FeaturedItemComponent implements OnInit {
  @Input() listData:{name: string, desc: string, img: string, ingredients: string[], rating: number}= {name: "", desc: "", img: "", ingredients: [], rating: 0};
  temp: number[] = [];

  constructor() {

  }
  
  ngOnInit(): void {
    this.temp = Array(this.listData.rating).fill(0).map((x,i) => i);
  }
}
