import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { UsersListRowComponent } from './users-list-row.component';

import { UserMock } from '@monorepo-test/mocks';

describe('UsersListRowComponent', () => {
  let component: UsersListRowComponent;
  let fixture: ComponentFixture<UsersListRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersListRowComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListRowComponent);
    component = fixture.componentInstance;
    const user = new UserMock().model();
    component.user = user;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Props', () => {
    it('Title - should render the email of the user', () => {
      const title = fixture.debugElement.query(By.css('.title'));
      const nativeTitle: HTMLTitleElement = title.nativeElement;

      expect(nativeTitle.textContent.trim()).toEqual(component.user['email']);
    });

    it('Description - should render the status of the user', () => {
      const description = fixture.debugElement.query(By.css('.description'));
      const nativeDescription: HTMLParagraphElement = description.nativeElement;

      expect(nativeDescription.textContent.trim()).toEqual(
        component.user['value']
      );
    });
  });

  describe('User Interaction', () => {
    it('Click on User list row - should redirect to individual user page', () => {
      const router = TestBed.inject(Router);
      spyOn(router, 'navigateByUrl');
      const listRow = fixture.debugElement.query(By.css('.user_list_row'));
      const nativelistRow: HTMLAnchorElement = listRow.nativeElement;

      nativelistRow.click();
      expect(router.navigateByUrl).toHaveBeenCalledWith(
        router.createUrlTree(['/users/2']),
        { skipLocationChange: false, replaceUrl: false }
      );
    });

    it('Click on edit icon - should emit an "edit" event', () => {
      spyOn(component.edit, 'emit');
      const button = fixture.debugElement.query(By.css('#edit_btn'));
      const nativeButton: HTMLButtonElement = button.nativeElement;

      nativeButton.click();
      fixture.detectChanges();

      expect(component.edit.emit).toHaveBeenCalledWith({
        type: 'edit',
        id: '206',
      });
    });

    it('Click on delete icon - should emit a "delete" event', () => {
      spyOn(component.delete, 'emit');
      const button = fixture.debugElement.query(By.css('#delete_btn'));
      const nativeButton: HTMLButtonElement = button.nativeElement;

      nativeButton.click();
      fixture.detectChanges();

      expect(component.delete.emit).toHaveBeenCalledWith({
        type: 'delete',
        id: '206',
      });
    });
  });
});
