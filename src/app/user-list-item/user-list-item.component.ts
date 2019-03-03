import { Component, OnInit, Input } from '@angular/core';

/**
 * Component that takes each user in the userlist array as an input and creates
 * a list item for each one. Also sets the text color based on textColor input
 */
@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css'],
})
export class UserListItemComponent implements OnInit {
  @Input() user : string;
  @Input() textColor : string;
  constructor() { }

  ngOnInit() {
  }

}
