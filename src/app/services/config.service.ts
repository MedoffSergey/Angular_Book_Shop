import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ConfigService {
  constructor(
		private httpClient: HttpClient
	) { }

  getBooks(): Observable<any> {
    return this.httpClient.get(`http://localhost:5984/books`);
  }
}
