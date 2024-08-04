import { Component, Input, input, OnInit } from '@angular/core';
import { FoodDrink } from '../food-drink.model';
import { FoodDrinkService } from '../../food-drink.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-food-drink-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './food-drink-list.component.html',
  styleUrl: './food-drink-list.component.css'
})
export class FoodDrinkListComponent implements OnInit{
  items: FoodDrink[] = [];
  searchTerm: string = '';
  selectedCategory: string = '';

  constructor(private FoodDrinkService: FoodDrinkService) {}

  ngOnInit(): void {
    this.items = this.FoodDrinkService.getItems();

  }

  ngAfterContentInit(): void {
    this.FoodDrinkService.currentData.subscribe(data => {
      this.searchTerm = data;
    });
  }

  filteredItems(): FoodDrink[] {
    return this.items.filter(item =>
      (this.selectedCategory === '' || item.category === this.selectedCategory) &&
      item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  changeValue(val:number,item:FoodDrink):void{
    if(val == 1 && item.quantity <20){
      item.quantity++;
    }else if(val == -1){
      if(item.quantity >0){
        item.quantity--;
      }
    }
  }
}
