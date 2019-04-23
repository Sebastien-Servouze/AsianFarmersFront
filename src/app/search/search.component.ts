import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Recipe } from '../models/Recipe';
import { FormControl } from '@angular/forms/'
import { ApiService } from './api.service';
import { Router, ActivatedRoute } from '@angular/router';

declare var particlesJS: any;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit
{
  search: string;
  recipesTree: Recipe[][];
  formControl: FormControl;

  constructor(private api: ApiService, private router: Router, private activatedRoute: ActivatedRoute, private cdRef: ChangeDetectorRef)
  {
    this.formControl = new FormControl();
    this.recipesTree = [];
  }

  ngOnInit() 
  {
    particlesJS.load('header', 'assets/header-particles.json');
    // Abonnement à la route pour détecter les changement de paramètres
    this.activatedRoute.params.subscribe(params =>
      {
        var productName = params['productName'];

        // Si un produit à été transmis par url, on va chercher ce produit
        if (productName)
        {
          this.search = productName;
          this.recipesTree = [];
          this.loadRecipes(productName, () => this.scrollToRecipe(0));
        }
      });
  }

  onSearch()
  {
    this.router.navigate(["search/" + this.search]);
  }

  loadRecipes(productName: string, onSuccess = null)
  {
    console.log("Recherche de recettes pour '" + productName + "'");
    this.api.getRecipes(productName).subscribe(recipes =>
      {
        if (recipes)
        {
          console.log(recipes.length + " recettes récupérée.");
          this.recipesTree.push(recipes);

          if (onSuccess)
            onSuccess();
        }
        else
        {
          console.log("L'élément '" + productName + "' n'existe pas.");
        }
      });
  }

  scrollToRecipe(depth: number)
  {
    // Raffraichissement de la fenêtre
    this.cdRef.detectChanges();

    // Scroll jusqu'à la nouvelle ligne de recette apparue
    document.querySelectorAll('.recipes_' + (depth))[0].scrollIntoView({behavior: "smooth"});
  }

  getClickedElement($event)
  {
    this.loadRecipes(this.recipesTree[$event.depth][$event.recipeIndex].Lines[$event.elementIndex].Ingredient.Name, () => 
      {
        // Choix de la recette sélectionnée
        // if (this.recipesTree[$event.depth].length > 1)
        //   this.recipesTree[$event.depth] = [this.recipesTree[$event.depth][$event.recipeIndex]];

        this.scrollToRecipe($event.depth);
      });
  }

}
