import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ListItemComponent implements OnInit {

  @Input() listData:{name: string, desc: string, img: string, ingredients: string[], rating: number}= {name: "", desc: "", img: "", ingredients: [], rating: 0};
  temp: number[] = [];

  constructor() {

  }
  
  ngOnInit(): void {
    this.temp = Array(this.listData.rating).fill(0).map((x,i) => i);
  }

}
