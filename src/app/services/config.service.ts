import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from "rxjs";

@Injectable()
export class ConfigService {


  constructor(
		private httpClient: HttpClient
	) {  }

  getBooks(): Observable<any> {
    return this.httpClient.get(`http://localhost:5984/books`);
  }

  getBooksId(id) { 
   return this.httpClient.get(`http://localhost:5984/book/${id}`);
  }
}
