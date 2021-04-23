import { Component, OnInit } from '@angular/core';
import { Category, Product } from '../category';
import { CategoryService } from '../category.service';
//import { FOODS} from '../meals';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  public categories: Category[] = [];
  public products: Product[] = [];
  public category: Category;
  public IsCatalog = true;
  public BuyFood: number[]=[];
  constructor( private categoryService: CategoryService ) { }

  ngOnInit() {
    this.getCategories();
  }

  ChangeStatus(catalog1: Category){
    this.category= catalog1;
    this.IsCatalog = !this.IsCatalog;
    if(this.IsCatalog==false){
      this.getProducts();
    }
  }
  getCategories(){
    this.categoryService.getCategories().subscribe((data)=>{
      this.categories = data;
    });
  }
  getProducts(){
    this.categoryService.getProducts(this.category.id).subscribe((products)=>{this.products = products;})
   }
  //  getFoods(){
  //   this.route.paramMap.subscribe((params)=>{
  //     const id = +params.get('id');
  //     this.categoryService.getFood(id).subscribe((data) =>{
  //       this.foods = data;
  //     });
  //   })
  // }

  // categories: Category[] = [];
  // foods:Product[] = [];
  // public IsCatalog = true;
  // public category: Category;
  // constructor(private route: ActivatedRoute, private categoryService: CategoryService) { }

  // ngOnInit(): void {
    // this.getCategories();
    //this.categories = MEALS;
    //this.foods = FOODS;
    
  //}
  // ChangeStatus(catalog1: Category){
  //   this.category= catalog1;
  //   this.IsCatalog = !this.IsCatalog;
  //   if(this.IsCatalog==false){
  //     this.getFoods();
  //   }
  // }

  // getCategories(){
  //   this.categoryService.getCategories().subscribe((data)=>{
  //     this.categories = data;
  //   });
  // }













}