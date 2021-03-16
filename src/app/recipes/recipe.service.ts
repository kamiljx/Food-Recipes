import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Spicy burger', 
        'Original Texas burger',
        'Texas Burger has gained the reputation of serving the best hamburger in the Lone Star State, each topped off with a signature cherry pepper.' ,
        'https://d1e3z2jco40k3v.cloudfront.net/-/media/kamispl-2016/franks-pl/recipes_img/2000x1125/big_0003_pikantny_teksanski_burger.png?rev=f2980b5e47d3472da0142bc30113c968&vd=20200704T053827Z&hash=42F58857DE48407DFBF083BA2EFE70BA',
        [new Ingredient(
          'Tomatoe', 1),
          new Ingredient(
          'BBQ', 2
        )
      ]),
        new Recipe('McDonald\'s Maestro', 
        'GRILLED CHEESE',
        'A masterful burger prepared from a brioche bun with 100% juicy beef, with crunchy bacon slices and deliciously melted cheese cutlet and cheddar cheese. The taste is complemented by expressive pickles with golden roasted onions, American-style mustard sauce and ketchup.', 
        'https://cdn.mcdonalds.pl/uploads/20200428112341/opt/s02.png',
        [
          new Ingredient(
            'Meat',1),
          new Ingredient(
            'Bacon',2)
        ]
        ),
      ];

      getRecipes() {
        return this.recipes.slice();
      }
    
}