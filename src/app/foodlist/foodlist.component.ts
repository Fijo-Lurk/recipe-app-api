import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { provideRoutes } from '@angular/router';
import { RecipeService } from "../recipe.service";
import { Recipe } from '../recipe';


@Component({
  selector: 'app-foodlist',
  templateUrl: './foodlist.component.html',
  styleUrls: ['./foodlist.component.css'],
  providers: [RecipeService]
})
export class FoodlistComponent implements OnInit {
  
  @Input() selectedDiet;
  @Input() selectedFoodCourse;
  recipes: Recipe[];


  constructor(private recipeService : RecipeService) {}
    


    showRecipe(){
      this.recipeService.getRecipes(this.selectedFoodCourse, this.selectedDiet).subscribe(data => {
        this.recipes = data.results
      });
    }


  ngOnInit(): void {

    this.showRecipe()
  
  }

}
