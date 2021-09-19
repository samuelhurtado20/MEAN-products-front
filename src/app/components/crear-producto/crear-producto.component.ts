import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css'],
})
export class CrearProductoComponent implements OnInit {
  productForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private productService: ProductoService
  ) {
    this.productForm = this.fb.group({
      Name: ['', Validators.required],
      Category: ['', Validators.required],
      Location: ['', Validators.required],
      Price: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  addProduct() {
    console.log(this.productForm);
    console.log(this.productForm.get('Name')?.value);

    const newProduct: Product = {
      Name: this.productForm.get('Name')?.value,
      Category: this.productForm.get('Category')?.value,
      Location: this.productForm.get('Location')?.value,
      Price: this.productForm.get('Price')?.value,
    };

    this.productService.createProduct(newProduct).subscribe(
      (data) => {
        this.toastr.success('Hello world!', 'Toastr fun!');
        this.router.navigate(['/']);
      },
      (error) => {
        this.toastr.error('Unexpected Error', 'Error');
        console.log(error);
        this.productForm.reset();
      }
    );
  }
}
