import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Car } from '../models/car-list.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private apiUrl = `${environment.apiUrl}/Cars`;

  constructor(private http: HttpClient) {}

    getAllCars(): Observable<Array<Car>> {
         return this.http.get<Array<Car>>(this.apiUrl)
    }
}