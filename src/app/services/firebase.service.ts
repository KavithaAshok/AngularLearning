import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  baseUrl = environment.baseUrl;

  constructor(private readonly httpClient: HttpClient) { }

  getAllItems(): Observable<any> { 
    return this.httpClient.get(this.baseUrl + 'employees.json');
  }

  getItemsById() { }

  addItems(form):Observable<any> { 
    return this.httpClient.post(this.baseUrl + 'employees.json', form);
  }

  updateItemsById(id, form):Observable<any> {
    return this.httpClient.put(this.baseUrl + 'employees/' +id+ '.json', form)
   }

  deleteItemsById(id: any): Observable<any> { 
    return this.httpClient.delete(this.baseUrl + 'employees/'+id+'.json');
  }
}
