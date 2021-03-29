import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'monorepo-test-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  users = [
    {
      email: 'Andreas.Gunnahr@hotmail.com',
      value: 'Inactive',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  public editUser({ type, id }) {
    console.log(type, id);
  }

  public deleteUser({ type, id }) {
    console.log(type, id);
  }
}
