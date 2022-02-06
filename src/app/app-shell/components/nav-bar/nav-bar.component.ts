import { Component, OnInit } from '@angular/core';
import { ShoppingCardService } from 'src/app/shared/services/shopping-card.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  cartItemsCount: number = 0;
  constructor(private shoppingCartService: ShoppingCardService) { }

  ngOnInit(): void {
this.shoppingCartService.cartExistingCars.subscribe(cars =>{
  this.cartItemsCount = cars?.length;
})
  }

}
