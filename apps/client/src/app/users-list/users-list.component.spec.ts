import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsersListRowComponent } from '../users-list-row/users-list-row.component';
import { UsersListComponent } from './users-list.component';
import { UserMock } from '@monorepo-test/mocks';
import { By } from '@angular/platform-browser';

describe('UsersListComponent', () => {
  let component: UsersListComponent;
  let fixture: ComponentFixture<UsersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersListComponent, UsersListRowComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListComponent);
    component = fixture.componentInstance;
    const user = new UserMock().model();
    component.users.push(user);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Store', () => {
    it('list - should render the right number of UsersListRow components', () => {
      const children = fixture.debugElement.queryAll(
        By.css('monorepo-test-users-list-row')
      );

      expect(children.length).toEqual(2);
    });

    it('total - should render pagination when the number of shown items is lower than the total', () => {
      // Test Implementation
    });

    it('total - should not render pagination when the number of shown items is equal to the total', () => {
      // Test Implementation
    });
  });

  describe('User interactions', () => {
    it('click on load more - should call the store to load more items', () => {
      // Test Implementation
    });
  });

  describe('Child Components', () => {
    describe('<UsersListRow> events', () => {
      it('Click - should change the router to go to the details page', () => {
        // Test Implementation
      });

      it('Edit - should change the router to go to the edit page', () => {
        // Test Implementation
      });

      it('Delete - should call the store to remove the user', () => {
        // Test Implementation
      });
    });
  });
});
