import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PepolComponent } from './pepol.component';

describe('PepolComponent', () => {
  let component: PepolComponent;
  let fixture: ComponentFixture<PepolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PepolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PepolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
