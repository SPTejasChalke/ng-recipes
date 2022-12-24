import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AddListItemComponent } from './recipes/add-list-item/add-list-item.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoplistComponent } from './shoplist/shoplist.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  { 
    path: 'recipes',
    children: [
      {
        path: '',
        children: [
          {
            path: '',
            component: RecipesComponent
          },
          {
            path: 'recipedetail',
            component: RecipeDetailsComponent
          }
        ]
      },
      {
        path: 'addrecipe',
        component: AddListItemComponent
      }
  ]
  },
  {
    path: 'shoplist',
    component: ShoplistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
