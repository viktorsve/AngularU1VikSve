import { Component, OnInit } from '@angular/core';

/**
 * Storing userlist array and acting as parent component for EditUsersComponent
 * and UserListItemComponents
 */
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userlist: string[] = ["Leanne Graham", "Ervin Howell", "Clementine Bauch", "Patricia Lebsack"];
  constructor() { }

  ngOnInit() {
  }

  /**
   * Method for adding users to the userlist array based on output from
   * EditUsersComponent
   */
  addUser($event) {
    this.userlist.unshift($event);
  }

  /**
   * Method for removing users from the userlist array
   */
  removeUser() {
    this.userlist.pop();
  }

}
