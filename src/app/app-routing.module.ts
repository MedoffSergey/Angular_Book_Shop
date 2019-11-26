import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductListComponent } from "./product/product-list/product-list.component";
import { BookCardComponent } from "./product/book-card/book-card.component";

const routes: Routes = [  //маршруты URL
  { path: "", redirectTo: "/product-list", pathMatch: "full" },
  { path: "product-list", component: ProductListComponent },

  { path: "book-card", redirectTo: 'book-card/' },
  { path: "book-card/:cardId", component: BookCardComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
