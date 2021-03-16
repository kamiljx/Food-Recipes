import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
    public name: string;
    public description: string;
    public descShort: string;
    public imagePath: string;
    public ingredient: Ingredient[];

    constructor(name: string, desShort: string, desc: string, imagePath: string, ingredient: Ingredient[]) {
        this.name = name;
        this.descShort = desShort;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingredient = ingredient;
        
    }
}