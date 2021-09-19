export class Product {
  _id?: string;
  Name: string;
  Category: string;
  Location: string;
  Price: number;

  constructor(Name: string, Category: string, Location: string, Price: number) {
    this.Name = Name;
    this.Category = Category;
    this.Location = Location;
    this.Price = Price;
  }
}
