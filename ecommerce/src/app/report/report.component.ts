import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  users: any;
  showSearch: boolean = false;

  constructor(private ps:UserService) { 
    this.search(this.id);
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
