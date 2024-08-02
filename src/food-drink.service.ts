import { Injectable } from '@angular/core';
import { FoodDrink } from './app/food-drink.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodDrinkService {

  private items: FoodDrink[] = [
    { id: 1, name: 'Pizza', quantity :0,category: 'Food' , imgSrc : 'pizza.jpg', price: 15},
    { id: 2, name: 'Burger', quantity :0, category: 'Food' ,imgSrc : 'burger.png', price: 20},
    { id: 3, name: 'Coke', quantity :0, category: 'Drink' ,imgSrc : 'cola.png', price: 5},
    { id: 4, name: 'Pasta', quantity :0, category: 'Food',imgSrc : 'pasta.png' , price: 30},
    { id: 5, name: 'Lemonade' , quantity :0, category: 'Drink' ,imgSrc : 'lemonada.png', price: 10}
  ];

  getItems(): FoodDrink[] {
    return this.items;
  }

  private dataSource = new BehaviorSubject<string>('');
  currentData = this.dataSource.asObservable();

  changeData(data: string) {
    this.dataSource.next(data);
  }
}
