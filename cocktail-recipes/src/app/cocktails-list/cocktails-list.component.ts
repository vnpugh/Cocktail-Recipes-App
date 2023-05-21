import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Cocktail } from '../cocktail.module';
import { CocktailService } from '../cocktail.service';

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.css']
})
export class CocktailsListComponent implements OnInit{
  cocktails$!: Observable<Cocktail[]>;
  constructor(private cocktailService: CocktailService) {}

  ngOnInit(): void {
     this.cocktails$ = this.cocktailService.listByFirstLetter('b');
  }


}
