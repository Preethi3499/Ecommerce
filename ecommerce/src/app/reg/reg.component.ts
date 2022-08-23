import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  constructor(private rs:RegisterService) { }
  insertData(insert1:any){

    this.rs.insertData(insert1.value).subscribe();
    window.location.replace('/home');
  }

  ngOnInit(): void {
  }

}
