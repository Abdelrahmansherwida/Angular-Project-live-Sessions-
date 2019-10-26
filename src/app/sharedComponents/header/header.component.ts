import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    // console.log(' here we r in header');
  }
  routFunc(key) {
    console.log('test click rout');
    if (key === 'hM') {
      this.router.navigate(['/home/home']);
    }
    if (key === 'bD') {
      this.router.navigate(['/bindData/bind']);
    }
    if (key === 'cR') {
      this.router.navigate(['/forms/create']);
    }
  }
}
