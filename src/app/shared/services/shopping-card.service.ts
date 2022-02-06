import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Car } from '../models/car.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCardService {

  private cars: Car[] = []
private carAddedToCartSubject = new BehaviorSubject(this.cars);
public cartExistingCars: Observable<Car[]> = this.carAddedToCartSubject.asObservable();
  constructor() { }

  public addToCart(car: Car) {
    this.cars.push(car);
    this.carAddedToCartSubject.next(this.cars);
  }
}

