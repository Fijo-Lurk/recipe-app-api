import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css']
})
export class BookmarkComponent implements OnInit {
  recipes: any;
  index: number = 0;
  constructor(private recipeService : RecipeService) { }

  getRecipeById(){
    this.recipeService.getBookmark().subscribe(data => {
      this.recipes = data
    });
  }

  ngOnInit(): void {
    this.getRecipeById()
  }


  removebtn(id:Number){
    this.recipeService.removeBookmark(id)
  }



}
