import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../modal/Modal';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  showSearch!: boolean; 

  constructor(private ps:UserService) {
    this.findAllUsers();
    this.search(this.id);
    
   }
   users:any
    findAllUsers(){
     this.ps.findAllUsers().subscribe((result:any)=>{this.users=result});
   }
  id:any
  search(id:number) {
    this.ps.findUserById(this.id).subscribe((users:any) => {
      this.users = users;
      this.showSearch = true;
    });
  }


  ngOnInit(): void {
  }

}
