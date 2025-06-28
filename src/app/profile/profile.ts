import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  userName: string | null = '';
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    //way 1
    // this.userName = this.route.snapshot.paramMap.get('name');
    // console.log(this.userName);
    //way-2
    // this.route.queryParams.subscribe((params) => {
    //   this.userName = params['name'];
    // });
    //way-3
    this.route.data.subscribe((data) => {
      console.log(data['name']);
      this.userName = data['name'];
    });
  }
}
