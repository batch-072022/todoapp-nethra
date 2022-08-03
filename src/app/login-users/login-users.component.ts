import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-users',
  templateUrl: './login-users.component.html',
  styleUrls: ['./login-users.component.css']
})
export class LoginUsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  users = [
    {id:222,firstname:"Sai Nethra",lastname:"Domakonda",email:"nethra@gmail.com"},
    {id:223,firstname:"Nethra",lastname:"21",email:"nethra21@gmail.com"},

  ];

  deleteUsers(){
    alert("Successfully Deleted");
  }

}