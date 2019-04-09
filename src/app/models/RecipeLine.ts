import { Recipe } from "./Recipe";
import { Element } from "./Element";

export class RecipeLine
{
    RecipeLineID: number
    RecipeID: number;
    Recipe: Recipe;
    IngredientID: number;
    Ingredient: Element
    Quantity: number;
}