import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Car } from 'src/app/shared/models/car.model';
import { CarDetail } from 'src/app/shared/models/car-details.model';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  private apiUrl = `${environment.apiUrl}/Cars`;

  constructor(private http: HttpClient) {}

    getAllCars(): Observable<Array<Car>> {
         return this.http.get<Array<Car>>(this.apiUrl)
    }

    getCarDetails(id: number): Observable<CarDetail>{
      return this.http.get<CarDetail>(`${this.apiUrl}/${id}`);

    }
}