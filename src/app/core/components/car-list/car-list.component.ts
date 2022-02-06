import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car-service.service';
import { DialogService } from 'primeng/dynamicdialog';
import { CarDetailsComponent } from '../car-details/car-details.component';
import { Car } from 'src/app/shared/models/car.model';
import { ShoppingCardService } from 'src/app/shared/services/shopping-card.service';
@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {

  cars: Car[] = [];

  constructor(private carService: CarService,private dynamicDialogService: DialogService, private ShoppingCardService: ShoppingCardService) { }

  ngOnInit() {
      this.carService.getAllCars().subscribe(cars => this.cars = cars);
  }

  openCarDetails(carId: number){
    this.dynamicDialogService.open(CarDetailsComponent,{
      data: {
        carId: carId
      },
      header: 'Car Details',
      width: '35%',
    })
  }

  onAddToCartClicked(car: Car){
   this.ShoppingCardService.addToCart(car);
   car.isClicked = true;
  }
}
