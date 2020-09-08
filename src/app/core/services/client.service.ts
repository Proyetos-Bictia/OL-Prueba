import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { Client } from 'src/app/models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private baseUrl = environment.base_url

  constructor(private http: HttpClient) { }

  getClients() {
    const url = `${this.baseUrl}/data`
    return this.http.get(url).pipe(
      map((resp: any) => resp.message as Client[])
    )
  }

  createClient(client: Client) {
    const url = `${this.baseUrl}/data`
    return this.http.post(url, client).pipe(
      map((resp: any) => resp.message as Client)
    )
  }

  editClient(id, client: Partial<Client>) {
    const url = `${this.baseUrl}/data/${id}`
    return this.http.patch(url, client).pipe(
      map((resp: any) => resp.message as Client)
    )
  }

  deleteClient(id) {
    const url = `${this.baseUrl}/data/${id}`
    return this.http.delete(url).pipe(
      map((resp: any) => resp.message)
    )
  }

}
