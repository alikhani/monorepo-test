import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'monorepo-test-users-list-row',
  templateUrl: './users-list-row.component.html',
  styleUrls: ['./users-list-row.component.scss'],
})
export class UsersListRowComponent implements OnInit {
  @Input() user: any = {
    email: '',
    value: '',
  };

  @Output() delete: EventEmitter<any> = new EventEmitter<any>();
  @Output() edit: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  public editRow(event, id) {
    event.stopPropagation();
    this.edit.emit({ type: 'edit', id });
  }

  public deleteRow(event, id) {
    event.stopPropagation();
    this.delete.emit({ type: 'delete', id });
  }
}
