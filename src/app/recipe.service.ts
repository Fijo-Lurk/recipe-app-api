import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { identity, Observable, throwError } from 'rxjs';
import { Recipe } from './recipe';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  apiKey = '&apiKey=5550fb42743b4794a5d05a3234c0ece1';
  getRecipesFromApi = `https://api.spoonacular.com/recipes/complexSearch?query=` 
  getRecipeFromAPi = `https://api.spoonacular.com/recipes/`
  getBookmarkRecipe = `https://api.spoonacular.com/recipes/informationBulk?ids=`
  bookmarks: any =[];
 
  constructor(private http: HttpClient) {}
  

  //get several recipe determend if cours and diet is chosen 
  getRecipes(recipeType:string, selectedDiet:string): Observable<any> {
    if(recipeType && selectedDiet){
      return this.http.get<Recipe[]>(this.getRecipesFromApi + recipeType + '/' + selectedDiet + this.apiKey);
    }
    else if(recipeType){
      return this.http.get<Recipe[]>(this.getRecipesFromApi + recipeType + '/' + this.apiKey);
    }else{
      return this.http.get<Recipe[]>(this.getRecipesFromApi + this.apiKey);
    }
  }
  //get singal recipe with specific id. 
  getRecipeWithId(id:Number): Observable<any>{
    return this.http.get<Recipe[]>(this.getRecipeFromAPi + id + '/information?' + this.apiKey);
  }

  bookmark(id:Number){
    this.bookmarks.push(id)
  }
  getBookmark() : Observable<any>{
    return this.http.get<Recipe[]>(this.getBookmarkRecipe + this.bookmarks + this.apiKey);
  }


  removeBookmark(id:Number){
     this.bookmarks = this.bookmarks.filter(recipeId => recipeId !== id) 
  }
 

 
}
