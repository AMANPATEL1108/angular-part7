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

  users = [
    {
      id: '1',
      name: 'Aman',
      age: '28',
      email: 'aman@gmail.com',
    },
    {
      id: '2',
      name: 'Aman2',
      age: '29',
      email: 'aman2@gmail.com',
    },
    {
      id: '3',
      name: 'Aman3',
      age: '30',
      email: 'aman3@gmail.com',
    },
    {
      id: '4',
      name: 'Aman4',
      age: '31',
      email: 'aman4@gmail.com',
    },
  ];
}
