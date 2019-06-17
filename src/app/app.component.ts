import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'userapp';
  userData: any = [];
  showItems: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.showItems.name = true;
    this.getUserData().subscribe( data => {
     const user: any = data;
     this.userData.image = user.results[0].picture.large;
     this.userData.email = user.results[0].email;
     this.userData.phone = user.results[0].phone;
     this.userData.firstname = user.results[0].name.first;
     this.userData.lastname = user.results[0].name.last;
     this.userData.location = `${user.results[0].location.street} ${user.results[0].location.city}`;
     this.userData.password = user.results[0].login.password;
     this.userData.birthDate = user.results[0].dob.date;
    },  error => {
        alert(error);
    });
  }

  getUserData() {
    const  options = { headers: {'Content-Type': 'application/json'}};
    return this.http.get('https://randomuser.me/api/',  options );
 }

 show(item) {
   this.showItems = [];
   this.showItems[item] = true;
 }
}
