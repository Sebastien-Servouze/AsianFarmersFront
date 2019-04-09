import { Component, OnInit } from '@angular/core';
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
  recipes: Recipe[];
  formControl: FormControl;

  constructor(private api: ApiService, private router: Router, private activatedRoute: ActivatedRoute)
  {
    this.formControl = new FormControl();
  }

  ngOnInit() 
  {
    // Abonnement à la route pour détecter les changement de paramètres
    this.activatedRoute.params.subscribe(params =>
      {
        var productName = params['productName'];

        // Si un produit à été transmis par url, on va chercher ce produit
        if (productName)
        {
          this.loadRecipe(productName);
        }
      });
  }

  onSearch()
  {
    this.router.navigate(["search/" + this.search]);
  }

  loadRecipe(productName: string)
  {
    this.api.getRecipes(productName).subscribe(recipes =>
      {
        if (recipes)
        {
          this.recipes = recipes;
          this.search = productName;
        }
        else
        {
          console.log("L'élément '" + productName + "' n'existe pas.");
        }
      });
  }

}
