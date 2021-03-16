import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShopingListService{
    ingredientsChanged = new EventEmitter<Ingredient[]>()
    private ingredients: Ingredient[] = [
        new Ingredient('Tomatoe', 2),
        new Ingredient('Potato', 3)
      ];

      constructor(){}
    getIngredient(){
        return this.ingredients.slice();
    }
    addIngredient(ingEvent: Ingredient){
        this.ingredients.push(ingEvent)
        this.ingredientsChanged.emit(this.ingredients.slice())
    }

}