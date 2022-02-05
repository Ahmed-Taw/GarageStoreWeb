import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Car } from '../../models/car-list.model';
import { CarService } from '../../services/car-service.service';
import { DialogService } from 'primeng/dynamicdialog';
import { CarDetailsComponent } from '../car-details/car-details.component';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {

  cars: Car[] = [];

  constructor(private carService: CarService,private dynamicDialogService: DialogService) { }

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
}
