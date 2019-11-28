import { Component, OnInit } from "@angular/core";
import { ConfigService } from "../../services/config.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  public products: any[] = [];
  public displayedColumns: string[] = ['id', 'name', 'age', 'author' ,'showBtn'];

  constructor(public configService: ConfigService) {}

  ngOnInit(): void {
    this.configService.getBooks().subscribe(data => {
      console.log(data)
      this.products = data;

    }, error => {
      if(error){
        debugger;
        console.log(error)
      }
    });
  }

}
