import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReceipedataService {
  
  recipeData: {name: string, desc: string, img: string, ingredients: string[], rating: number}[]=[
      {
        "name": "Chicken Kathi Rolls",
        "desc": "Kathi rolls have fast become the regular street food around the country, with a host of eateries and stalls selling a variety of this delicious, filling rolls. A single kathi roll can be had for lunch or dinner and you'll be full for long. This is an easy and quick recipe that you can try at home for brunch or a heavy evening meal. You can have it with your friends for a casual dinner at home.Chicken kathi roll has a delicious melange of chicken tikka and spices rolled together and served with a chutney.",
        "img": "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
        "ingredients": ["chicken", "onions", "lemons"],
        "rating": 4
      },
      {
        "name": "Veg Burger",
        "desc": "Veggie burgers have become a popular healthy alternative to meat based burgers. These days, grocery stores and restaurants are offering many options, that try to mimic a meat texture, to custom made black bean and veggie patties and more. This all-veggie patty can compete with any Indian restaurant veggie burger and is by far better than the store-bought patties.",
        "img": "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "ingredients": ["beans", "lentils", "tofu"],
        "rating": 3
      },
      {
        "name": "Potato fries",
        "desc": "French fries (North American English), chips (British English), finger chips (Indian English), french-fried potatoes, or simply fries, are batonnet or allumette-cut deep-fried potatoes of disputed origin from Belgium and France. They are prepared by cutting potatoes into even strips, drying them, and frying them, usually in a deep fryer. Pre-cut, blanched, and frozen russet potatoes are widely used, and sometimes baked in a regular or convection oven; air fryers are small convection ovens marketed for frying potatoes.",
        "img": "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "ingredients": ["potato", "coriander"],
        "rating": 4
      },
      {
        "name": "Sandwhich",
        "desc": "This is an instant and quick sandwich recipe with minimal stuffing. Unlike the traditional vegetable sandwich where vegetables are sliced and placed in between the bread slices, this follows a different way. Basically, the diced or finely chopped onions and capsicum is mixed together with spice mix powders like cumin, chaat masala and pepper. In addition, it is loaded with coriander leaves herb making it flavoured stuffing masala.",
        "img": "https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "ingredients": ["bread", "onion", "tomato"],
        "rating": 2
      }
  ];

featuredData: {name: string, desc: string, img: string, ingredients: string[], rating: number}[]=[
    {
      "name": "Chicken Kathi Rolls",
      "desc": "Kathi rolls have fast become the regular street food around the country, with a host of eateries and stalls selling a variety of this delicious, filling rolls. A single kathi roll can be had for lunch or dinner and you'll be full for long. This is an easy and quick recipe that you can try at home for brunch or a heavy evening meal. You can have it with your friends for a casual dinner at home.Chicken kathi roll has a delicious melange of chicken tikka and spices rolled together and served with a chutney.",
      "img": "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
      "ingredients": ["mint", "eggs", "chicken"],
      "rating": 4
    },
    {
      "name": "Veg Burger",
      "desc": "Veggie burgers have become a popular healthy alternative to meat based burgers. These days, grocery stores and restaurants are offering many options, that try to mimic a meat texture, to custom made black bean and veggie patties and more. This all-veggie patty can compete with any Indian restaurant veggie burger and is by far better than the store-bought patties.",
      "img": "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "ingredients": ["beans", "lentils", "tofu"],
      "rating": 3
    },
    {
      "name": "Potato fries",
      "desc": "French fries (North American English), chips (British English), finger chips (Indian English), french-fried potatoes, or simply fries, are batonnet or allumette-cut deep-fried potatoes of disputed origin from Belgium and France. They are prepared by cutting potatoes into even strips, drying them, and frying them, usually in a deep fryer. Pre-cut, blanched, and frozen russet potatoes are widely used, and sometimes baked in a regular or convection oven; air fryers are small convection ovens marketed for frying potatoes.",
      "img": "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "ingredients": ["potato", "coriander"],
      "rating": 4
    }
  ];

  constructor() { }

  logData():void{
    console.log(this.recipeData);
  }

  addData(data:{name: string, desc: string, img: string, ingredients: string[], rating: number}): void{
    this.recipeData.push(data);
    console.log("done");
  }
}
