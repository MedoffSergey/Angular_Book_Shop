import { Component, OnInit } from '@angular/core';
import { ConfigService } from "../../services/config.service";
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})


export class BookCardComponent {
  public cardBook;
  id: {[key: string]: number};

  constructor(public configService: ConfigService,
    private activateRoute: ActivatedRoute
  ) {this.id = activateRoute.snapshot.params;}


  ngOnInit(): void {

    this.configService.getBooksId(this.id.cardId).subscribe(data => {
      this.cardBook = data;
    }, error => {
      if(error){
        debugger;
      }
    });
  }

}
