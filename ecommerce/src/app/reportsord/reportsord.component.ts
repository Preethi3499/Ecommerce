import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../service/category.service';


@Component({
  selector: 'app-reportsord',
  templateUrl: './reportsord.component.html',
  styleUrls: ['./reportsord.component.css']
})
export class ReportsordComponent implements OnInit {

  constructor(private ps:CategoryService) { 
    this.findAllCategories();
  }
  category:any
  findAllCategories(){
    this.ps.findAllCategories().subscribe((result:any)=>{this.category=result});
  }

  ngOnInit(): void {
  }

}
