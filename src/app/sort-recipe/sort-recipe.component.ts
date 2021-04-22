import { Component, OnInit, TestabilityRegistry } from '@angular/core';
import {FormControl} from '@angular/forms';
import { _MatTabGroupBase } from '@angular/material/tabs';

@Component({
  selector: 'app-sort-recipe',
  templateUrl: './sort-recipe.component.html',
  styleUrls: ['./sort-recipe.component.css'],
  
})
export class SortRecipeComponent implements OnInit {
  panelOpenState = false;
  tabs = ['Appetizer', 'Main course', 'Dessert', 'breakfast', 'snack'];
  diets: string[] = ['Gluten Free', 'Vegan', 'vegetarian', 'Ketogenic', 'Paleo', 'Whole30', 'Pescetarian', 'Lacto-Vegetarian', 'Ovo-Vegetarian'];
  constructor() { }
  foodCourse:any
  selectedDiet:string;
  selectedFoodCourse:string;

  ngOnInit(): void {}


  submitDiet(dietname:string){
    this.selectedDiet = dietname;
  }

  submitCourse(tabs:any){
    this.selectedFoodCourse = tabs;
  }




  
 
  
  

}
 




