import { Element } from "./Element";
import { RecipeLine } from "./RecipeLine";

export class Recipe
{
    RecipeID: number;
    ProductID: number;
    Product: Element;
    CraftingToolID: number;
    CraftingTool: Element;
    Lines: RecipeLine[] = [];
}