import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteComicComponent } from './delete-comic.component';

describe('DeleteComicComponent', () => {
  let component: DeleteComicComponent;
  let fixture: ComponentFixture<DeleteComicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteComicComponent]
    });
    fixture = TestBed.createComponent(DeleteComicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
