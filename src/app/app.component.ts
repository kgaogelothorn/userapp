import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'userapp';
  userData: any = {};
  isloaded = false;
  constructor(private http: HttpClient) {
    this.getUserData().subscribe( data => {
      const user: any = data;
      this.userData =  {
         name : user.results[0].name,
         email: user.results[0].email,
         phone: user.results[0].phone,
         picture: user.results[0].picture,
         location: user.results[0].location,
         password: user.results[0].login.password,
         dob: user.results[0].dob
       };
       this.isloaded = true
     });
  }
  ngOnInit() {}

  getUserData() {
    return this.http.get('https://randomuser.me/api/');
  }
}
