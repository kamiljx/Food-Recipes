import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import {ShopingListService} from './/shoping-list.service'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: []
})
export class ShoppingListComponent implements OnInit {
ingredients: Ingredient[]
  constructor(private shoppingListService: ShopingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredient()
    this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    )
  }

}
