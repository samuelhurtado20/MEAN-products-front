import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  title = 'New Product';
  id: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private productService: ProductoService,
    private aRouter: ActivatedRoute
  ) {
    this.productForm = this.fb.group({
      Name: ['', Validators.required],
      Category: ['', Validators.required],
      Location: ['', Validators.required],
      Price: ['', Validators.required],
    });
    this.id = this.aRouter.snapshot.paramMap.get('id')!;
    //this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.isEdit();
  }

  addProduct() {
    console.log(this.productForm);
    console.log(this.productForm.get('Name')?.value);

    const newProduct: Product = {
      Name: this.productForm.get('Name')?.value,
      Category: this.productForm.get('Category')?.value,
      Location: this.productForm.get('Location')?.value,
      Price: this.productForm.get('Price')?.value,
    };

    if (this.id !== null) {
      this.productService.updateProduct(this.id, newProduct).subscribe(
        (data) => {
          this.toastr.info('Hello world!', 'Toastr fun!');
          this.router.navigate(['/']);
        },
        (error) => {
          this.toastr.error('Unexpected Error', 'Error');
          console.log(error);
          this.productForm.reset();
        }
      );
    } else {
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

  isEdit() {
    if (this.id !== null) {
      this.title = 'Edit Product';
      this.productService.getProduct(this.id).subscribe((data) => {
        this.productForm.setValue({
          Name: data.Name,
          Category: data.Category,
          Location: data.Location,
          Price: data.Price,
        });
      });
    }
  }
}
