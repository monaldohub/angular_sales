import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  productName: string;
  productId: number;
  productManager: string;
  startDate: Date;
  constructor() { }
  
}
