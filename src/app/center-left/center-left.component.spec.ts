import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterLeftComponent } from './center-left.component';

describe('CenterLeftComponent', () => {
  let component: CenterLeftComponent;
  let fixture: ComponentFixture<CenterLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterLeftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CenterLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
