import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'; // Import the RouterModule and Routes
import { AppComponent } from './app.component';
import { CocktailsListComponent } from './cocktails-list/cocktails-list.component';
import { CocktailDetailsComponent } from './cocktail-details/cocktail-details.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

// Define your routes
const routes: Routes = [
  { path: 'list', component: CocktailsListComponent },

  { path: 'cocktail-details/:id', component: CocktailDetailsComponent },

  { path: '', pathMatch: 'full', redirectTo: 'list' }, // Add a default redirect path

  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CocktailsListComponent,
    CocktailDetailsComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes) // Register the routes using forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
