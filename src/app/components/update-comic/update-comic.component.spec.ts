import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateComicComponent } from './update-comic.component';

describe('UpdateComicComponent', () => {
  let component: UpdateComicComponent;
  let fixture: ComponentFixture<UpdateComicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateComicComponent]
    });
    fixture = TestBed.createComponent(UpdateComicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
