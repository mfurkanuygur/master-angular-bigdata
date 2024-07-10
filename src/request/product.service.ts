import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private URL = 'https://us-east-2.aws.neurelo.com/rest/products';
  private APIKEY =
    'neurelo_9wKFBp874Z5xFw6ZCfvhXcbiu2z32e6f6VlioYXkSf62kyRdgtPcIVVIQZrNLN2lt0xFrVi8R4W0Xy0sclg2dhbS63EaSGBpyQYUofzj1bUbw7q0FF/9mYvN3YUNmUEtB1iGwfEjWr/K5sgaDeMd5KyERRttl/bRRXgi8KQx1oh9pBV84vf1v+3bsHh0KIhn_Y6O9Dhxjl+KWcfjNPEs4lUHwQ40wSrORa7vkCCb8rp4=';
  private allProducts = new BehaviorSubject<any[]>([]);
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<any[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-API-KEY': this.APIKEY,
    });
    return this.http.get<any[]>(this.URL, { headers }).pipe(
      map((response) => {
        this.allProducts.next(response);
        return response;
      }),
      catchError((error) => {
        return throwError('Bir hata oluştu, ürünler alınamadı.');
      })
    );
  }
}
