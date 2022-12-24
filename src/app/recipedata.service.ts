import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReceipedataService {
  
  recipeData: {name: string, desc: string, img: string, ingredients: string[], rating: number}[]=[
    {
        "name": "recipe 1",
        "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore optio inventore, amet pariatur provident suscipit expedita eos rem exercitationem in doloribus impedit omnis molestiae laudantium quidem distinctio odit est magnam error neque. Quidem quae, veritatis alias fugiat voluptatibus ea eum earum, et obcaecati excepturi perferendis suscipit pariatur sunt autem ullam blanditiis voluptatem dicta. Obcaecati repudiandae laborum eos? Aliquam facilis soluta rem ipsa voluptatum ex vero voluptas, ipsum debitis aut a accusamus molestias quasi amet? Maxime dolore enim non odit rem! Hic rerum eaque, voluptate animi veniam eum sapiente repudiandae, quisquam facilis illum doloremque natus harum magnam corrupti dolorem? Dolorem, vitae?",
        "img": "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
        "ingredients": ["i1", "i2"],
        "rating": 3
      },
      {
        "name": "recipe 2",
        "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore optio inventore, amet pariatur provident suscipit expedita eos rem exercitationem in doloribus impedit omnis molestiae laudantium quidem distinctio odit est magnam error neque. Quidem quae, veritatis alias fugiat voluptatibus ea eum earum, et obcaecati excepturi perferendis suscipit pariatur sunt autem ullam blanditiis voluptatem dicta. Obcaecati repudiandae laborum eos? Aliquam facilis soluta rem ipsa voluptatum ex vero voluptas, ipsum debitis aut a accusamus molestias quasi amet? Maxime dolore enim non odit rem! Hic rerum eaque, voluptate animi veniam eum sapiente repudiandae, quisquam facilis illum doloremque natus harum magnam corrupti dolorem? Dolorem, vitae?",
        "img": "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "ingredients": ["i1", "i2"],
        "rating": 4
      },
      {
        "name": "recipe 3",
        "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore optio inventore, amet pariatur provident suscipit expedita eos rem exercitationem in doloribus impedit omnis molestiae laudantium quidem distinctio odit est magnam error neque. Quidem quae, veritatis alias fugiat voluptatibus ea eum earum, et obcaecati excepturi perferendis suscipit pariatur sunt autem ullam blanditiis voluptatem dicta. Obcaecati repudiandae laborum eos? Aliquam facilis soluta rem ipsa voluptatum ex vero voluptas, ipsum debitis aut a accusamus molestias quasi amet? Maxime dolore enim non odit rem! Hic rerum eaque, voluptate animi veniam eum sapiente repudiandae, quisquam facilis illum doloremque natus harum magnam corrupti dolorem? Dolorem, vitae?",
        "img": "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "ingredients": ["i1", "i2"],
        "rating": 5
      },
      {
        "name": "recipe 4",
        "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore optio inventore, amet pariatur provident suscipit expedita eos rem exercitationem in doloribus impedit omnis molestiae laudantium quidem distinctio odit est magnam error neque. Quidem quae, veritatis alias fugiat voluptatibus ea eum earum, et obcaecati excepturi perferendis suscipit pariatur sunt autem ullam blanditiis voluptatem dicta. Obcaecati repudiandae laborum eos? Aliquam facilis soluta rem ipsa voluptatum ex vero voluptas, ipsum debitis aut a accusamus molestias quasi amet? Maxime dolore enim non odit rem! Hic rerum eaque, voluptate animi veniam eum sapiente repudiandae, quisquam facilis illum doloremque natus harum magnam corrupti dolorem? Dolorem, vitae?",
        "img": "https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "ingredients": ["i1", "i2"],
        "rating": 2
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
