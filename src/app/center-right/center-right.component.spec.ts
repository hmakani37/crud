import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterRightComponent } from './center-right.component';

describe('CenterRightComponent', () => {
  let component: CenterRightComponent;
  let fixture: ComponentFixture<CenterRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterRightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CenterRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
