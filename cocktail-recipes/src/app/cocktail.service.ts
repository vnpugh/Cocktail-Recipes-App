import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cocktail } from './cocktail.module';

interface CocktailDbDrink {
    idDrink: string;
    strDrink: string;
    strCategory: string;
    strDrinkThumb: string;
    strAlcoholic: string;
    strGlass: string;
    strInstructions: string;

  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strIngredient13: string;
  strIngredient14: string;
  strIngredient15: string;
}

interface CocktailDbResult {
  drinks: Array<CocktailDbDrink>;
}

@Injectable({
  providedIn: 'root'
})
@Injectable({
    providedIn: 'root'
  })
  export class CocktailService {
    static baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1';
  
    constructor(private http: HttpClient) { }

  listByFirstLetter(letter: string): Observable<Array<Cocktail>> {
    const url = `${CocktailService.baseUrl}/search.php?f=${letter}`;
    return this.http.get(url)
      .pipe(map((result: any) => this.mapResultToModel(result)));
  }
  

  getById(id: string): Observable<Cocktail> {
    const url = `${CocktailService.baseUrl}/lookup.php?i=${id}`;
    return this.http.get(url)
      .pipe(
        map((result: any) => this.mapResultToModel(result)),
        map((drinks: Array<Cocktail>) => {
          if (!drinks.length) {
            throw new Error(`Cocktail with id ${id} not found.`);
          }
  
          return drinks[0];
        })
      );
  }
  

private mapResultToModel(cocktailDbResult: CocktailDbResult): Cocktail[] {
  const drinks = cocktailDbResult?.drinks || [];

  return drinks
    .map(drink => this.mapSingleDrinkToModel(drink))
    .filter(drink => drink !== null) as Cocktail[];
}


private mapSingleDrinkToModel(drink: CocktailDbDrink): Cocktail | null {
    if (!drink) {
      return null;
    }
  
    const ingredients = [
      drink.strIngredient1,
      drink.strIngredient2,
      drink.strIngredient3,
      drink.strIngredient4,
      drink.strIngredient5,
      drink.strIngredient6,
      drink.strIngredient7,
      drink.strIngredient8,
      drink.strIngredient9,
      drink.strIngredient10,
      drink.strIngredient11,
      drink.strIngredient12,
      drink.strIngredient13,
      drink.strIngredient14,
      drink.strIngredient15,
    ].filter((ingredient) => !!ingredient);
  
    return {
        id: drink.idDrink,
        name: drink.strDrink,
        category: drink.strCategory,
        alcoholic: drink.strAlcoholic,
        glass: drink.strGlass,
        imageUrl: drink.strDrinkThumb,
        ingredients,
        instructions: drink.strInstructions
      };
    }
  }