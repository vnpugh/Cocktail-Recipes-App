import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'; // Import the RouterModule and Routes
import { AppComponent } from './app.component';
import { CocktailsListComponent } from './cocktails-list/cocktails-list.component';
import { CocktailDetailsComponent } from './cocktail-details/cocktail-details.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Define your routes
const routes: Routes = [
  { path: 'list', component: CocktailsListComponent },
  { path: 'details', component: CocktailDetailsComponent },
  { path: '', pathMatch: 'full', redirectTo: 'list' } // Add a default redirect path
];

@NgModule({
  declarations: [
    AppComponent,
    CocktailsListComponent,
    CocktailDetailsComponent
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
