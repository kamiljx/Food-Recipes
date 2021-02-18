import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is default description', 'https://www.hellomagazine.com/imagenes/cuisine/20210211106682/easy-chinese-new-year-recipes/0-514-324/chicken-a.jpg'),
    new Recipe('Test Recipe', 'This is default description', 'https://www.hellomagazine.com/imagenes/cuisine/20210211106682/easy-chinese-new-year-recipes/0-514-324/chicken-a.jpg'),
    new Recipe('Test Recipe', 'This is default description', 'https://www.hellomagazine.com/imagenes/cuisine/20210211106682/easy-chinese-new-year-recipes/0-514-324/chicken-a.jpg'),
    new Recipe('Test Recipe', 'This is default description', 'https://www.hellomagazine.com/imagenes/cuisine/20210211106682/easy-chinese-new-year-recipes/0-514-324/chicken-a.jpg'),
    new Recipe('Test Recipe', 'This is default description', 'https://www.hellomagazine.com/imagenes/cuisine/20210211106682/easy-chinese-new-year-recipes/0-514-324/chicken-a.jpg'),
    new Recipe('Test Recipe', 'This is default description', 'https://www.hellomagazine.com/imagenes/cuisine/20210211106682/easy-chinese-new-year-recipes/0-514-324/chicken-a.jpg')

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
