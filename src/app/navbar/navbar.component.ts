import { Component, EventEmitter, Output } from '@angular/core';
import { FoodDrink } from '../food-drink.model';
import { FoodDrinkService } from '../../food-drink.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  searchTerm:string = '';

  constructor(private FoodDrinkService: FoodDrinkService) {}

  onInputChange() {
    this.FoodDrinkService.changeData(this.searchTerm);
  }

  title:string = "Restaurant"
}
