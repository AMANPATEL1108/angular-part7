import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(private router: Router) {}

  //2-nd Way
  // goToProfile() {
  //   this.router.navigate(['profile'], { queryParams: { name: 'Aman patel' } });
  // }
}
