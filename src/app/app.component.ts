import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FoodDrinkListComponent } from "./food-drink-list/food-drink-list.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { CartComponent } from "./cart/cart.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FoodDrinkListComponent, NavbarComponent, FooterComponent, CartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
[x: string]: any;
  title = 'restaurant-app';
}
