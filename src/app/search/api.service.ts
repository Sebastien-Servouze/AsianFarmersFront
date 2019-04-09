import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Recipe } from '../models/Recipe';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService 
{
  constructor(private http: HttpClient) { }

  /**
   * GET api/recipe/productName
   * Récupère la liste des recettes pour l'élément productName
   */
  getRecipes(productName: string): Observable<Recipe[]>
  {
    return this.http.get<Recipe[]>("/api/recipe/" + productName)
      .pipe(
        catchError(this.handleError("getRecipes", null))
      );
  }

  /**
   * Gère les erreurs
   * @param operation : nom de l'opération 
   * @param result : valeur de retour en cas d'erreur
   */
  private handleError<T> (operation = 'operation', result?: T)
  {
    return (error : any): Observable<T> =>
    {
      console.error(error);
      return of(result as T);
    };
  }
}
