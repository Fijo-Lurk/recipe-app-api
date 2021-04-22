import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Observable, throwError } from 'rxjs';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-specific-recipe',
  templateUrl: './specific-recipe.component.html',
  styleUrls: ['./specific-recipe.component.css']
})
export class SpecificRecipeComponent implements OnInit {
  id:number
  recipes: any;
  

  constructor(private route: ActivatedRoute, private recipeService : RecipeService) {}

  ngOnInit(): void {
    this.getIdFromParams()  
    this.getRecipeById()
  }

  getIdFromParams(){
    this.route.paramMap.subscribe(params => {
      this.id = + params.get('id');
    })
  }

  getRecipeById(){
    this.recipeService.getRecipeWithId(this.id).subscribe(data => {
      this.recipes = data
    });
  }

  //send id data to service
  addBookmark(){
    this.recipeService.bookmark(this.id)
  }

}
