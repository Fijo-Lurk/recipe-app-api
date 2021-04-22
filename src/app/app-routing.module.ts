import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { FoodlistComponent } from './foodlist/foodlist.component';
import { HomeComponent } from './home/home.component';
import { SortRecipeComponent } from './sort-recipe/sort-recipe.component'
import { SpecificRecipeComponent } from './specific-recipe/specific-recipe.component';

const routes: Routes = [
  {path: '', component: HomeComponent,},
  {path: 'recipes', component: SortRecipeComponent,},
  {path: 'recipe/:id', component: SpecificRecipeComponent,},
  {path: 'bookmark', component: BookmarkComponent,},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


