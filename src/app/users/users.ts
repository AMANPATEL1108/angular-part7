import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {
  name: null | string = '';
  email: null | string = '';
  age: null | string = '';
  userId: null | string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      console.log(params);
      this.userId = params['id'];
      this.name = params['name'];
      this.email = params['email'];
      this.age = params['age'];
    });
  }
}
