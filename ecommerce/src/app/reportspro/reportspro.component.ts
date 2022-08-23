import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-reportspro',
  templateUrl: './reportspro.component.html',
  styleUrls: ['./reportspro.component.css']
})
export class ReportsproComponent implements OnInit {

  constructor(private ps:ProductService) {
   this.findAllProducts();
  }
  products:any
  findAllProducts(){
    this.ps.findAllProducts().subscribe((result:any)=>{this.products=result});
  }
  ngOnInit(): void {
  }

}
