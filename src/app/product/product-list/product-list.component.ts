import { Component, OnInit } from "@angular/core";
import { ConfigService } from "../../services/config.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  public products: any[] = [];

  constructor(public configService: ConfigService) {}
  ngOnInit(): void {
    this.configService.getBooks().subscribe(data => {

      // тут получаем данные с get запроса.
      debugger;
      this.products = data;
    }, error => {
      debugger;
      //тут обрабатываем ошибку
    });
  }

  share() {
    window.alert("The product has been shared!");
  }
}
