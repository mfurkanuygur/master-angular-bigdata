import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private URL = 'https://us-east-2.aws.neurelo.com/rest/products';
  private APIKEY =
    'neurelo_9wKFBp874Z5xFw6ZCfvhXcbiu2z32e6f6VlioYXkSf62kyRdgtPcIVVIQZrNLN2lt0xFrVi8R4W0Xy0sclg2dhbS63EaSGBpyQYUofzj1bUbw7q0FF/9mYvN3YUNmUEtB1iGwfEjWr/K5sgaDeMd5KyERRttl/bRRXgi8KQx1oh9pBV84vf1v+3bsHh0KIhn_Y6O9Dhxjl+KWcfjNPEs4lUHwQ40wSrORa7vkCCb8rp4=';
  
  constructor(private http: HttpClient) {}

  getAllProducts(skip: number): Observable<any[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-API-KEY': this.APIKEY,
    });
    const url = `${this.URL}?skip=${skip}&take=8`;

    return this.http.get<any[]>(url, { headers }).pipe(
      map((response) => response),
      catchError((error) => {
        console.error('Error fetching products:', error);
        return throwError('Bir hata oluştu, ürünler alınamadı.');
      })
    );
  }
}