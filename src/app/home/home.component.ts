import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ServiceProviderService } from '../service-provider.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  userList: any = [];

  constructor(private router: Router, private service : ServiceProviderService) {
   }

  ngOnInit(): void {
    let userDatas = window.sessionStorage.getItem('userData');
    let v = JSON.parse(String(userDatas));
    if(!!v){
      this.userList.push(v);
    }
 }


  logout() {
    sessionStorage.removeItem('userData')
    this.router.navigateByUrl('/signup')
  }
}
