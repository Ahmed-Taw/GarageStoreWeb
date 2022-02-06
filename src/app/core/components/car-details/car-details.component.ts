import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CarDetail } from '../../models/car-detail.model';
import { Car } from '../../models/car-list.model';
import { CarService } from '../../services/car-service.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent implements OnInit {
  car: CarDetail | undefined;
  constructor(private carService: CarService,  public dialogRef: DynamicDialogRef, public dialogConfig: DynamicDialogConfig) { }

  ngOnInit(): void {
    let carId = this.dialogConfig.data.carId;
    this.carService.getCarDetails(carId).subscribe(data => 
      this.car = data
    )
  }

}
