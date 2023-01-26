import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css'],
})
export class ListarProductosComponent implements OnInit {
  listProducts: Product[] = [];
  constructor(
    private _productService: ProductoService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this._productService.getProducts().subscribe(
      (data) => {
        console.log(data);
        this.listProducts = data.results;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteProduct(id?: string) {
    this._productService.deleteProduct(id??'').subscribe(
      (data) => {
        this.toastr.error('Product was deleted', 'Deleted');
        this.getProducts();
      },
      (error) => {
        this.toastr.error('Unexpected Error', 'Error');
        console.log(error);
      }
    );
  }
}
