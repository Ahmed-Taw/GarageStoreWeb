import { Car } from "./car-list.model";

export interface CarDetail extends Car{
    warehouseName: string;
    location: string
}