import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from "rxjs/operators";
import { User } from "../../models/user.model";

export interface Response {
  statusCode: number,
  error: string,
  message: unknown,
}


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = environment.base_url

  constructor(private http: HttpClient) { }

  loginUser(data) {
    const url = `${this.baseUrl}/user/login`
    return this.http.post(url, data).pipe(
      map((resp: Response) => resp.message as User)
    )
  }

}
