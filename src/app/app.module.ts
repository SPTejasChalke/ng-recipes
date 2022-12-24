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
import { ShopListItemComponent } from './shoplist/shop-list-item/shop-list-item.component';
import { ShopdataService } from './shopdata.service';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    HeadercompComponent,
    ShoplistComponent,
    ListItemComponent,
    AddListItemComponent,
    RecipeDetailsComponent,
    HomepageComponent,
    ShopListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ReceipedataService, ShopdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
