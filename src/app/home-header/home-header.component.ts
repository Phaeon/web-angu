import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent implements OnInit {

  isAuth = false;
  color!: string;
  margin!: number;

  constructor() { 
    this.color = document.body.style.backgroundColor
  }

  ngOnInit(): void {
  }

  openNav() {
    document.getElementById("mySidenav")!.style.width = "250px";
    // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }

  closeNav() {
    document.getElementById("mySidenav")!.style.width = "0";
    // document.body.style.backgroundColor = this.color;
  }

}
