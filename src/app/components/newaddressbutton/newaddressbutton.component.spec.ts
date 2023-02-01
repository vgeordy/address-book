import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewaddressbuttonComponent } from './newaddressbutton.component';

describe('NewaddressbuttonComponent', () => {
  let component: NewaddressbuttonComponent;
  let fixture: ComponentFixture<NewaddressbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewaddressbuttonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewaddressbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
