import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { ReceipedataService } from './recipedata.service';

import { RecipesComponent } from './recipes/recipes.component';
import { HeadercompComponent } from './headercomp/headercomp.component';
import { ShoplistComponent } from './shoplist/shoplist.component';
import { ListItemComponent } from './list-item/list-item.component';
import { AddListItemComponent } from './recipes/add-list-item/add-list-item.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { HomepageComponent } from './homepage/homepage.component';
<<<<<<< HEAD
=======
import { ShopListItemComponent } from './shoplist/shop-list-item/shop-list-item.component';
import { ShopdataService } from './shopdata.service';
>>>>>>> 6702abc4accb971a31fdf6e972d632058b24e0d5

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    HeadercompComponent,
    ShoplistComponent,
    ListItemComponent,
    AddListItemComponent,
    RecipeDetailsComponent,
<<<<<<< HEAD
    HomepageComponent
=======
    HomepageComponent,
    ShopListItemComponent
>>>>>>> 6702abc4accb971a31fdf6e972d632058b24e0d5
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
<<<<<<< HEAD
  providers: [ReceipedataService],
=======
  providers: [ReceipedataService, ShopdataService],
>>>>>>> 6702abc4accb971a31fdf6e972d632058b24e0d5
  bootstrap: [AppComponent]
})
export class AppModule { }
