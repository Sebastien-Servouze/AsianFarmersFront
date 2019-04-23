import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { ApiService } from './search/api.service';
import { HttpClientModule } from '@angular/common/http';
import { ElementComponent } from './search/element/element.component';
import { RecipeComponent } from './search/recipe/recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ElementComponent,
    RecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule,
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
