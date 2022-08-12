import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomScreenshotComponent } from './custom-screenshot.component';

describe('CustomScreenshotComponent', () => {
  let component: CustomScreenshotComponent;
  let fixture: ComponentFixture<CustomScreenshotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomScreenshotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomScreenshotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
