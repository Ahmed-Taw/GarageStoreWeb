import { Car } from "./car.model";

export interface CarDetail extends Car{
    warehouseName: string;
    location: string
}