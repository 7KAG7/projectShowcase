import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GmailCardComponent } from './gmail-card.component';

describe('GmailCardComponent', () => {
  let component: GmailCardComponent;
  let fixture: ComponentFixture<GmailCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GmailCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GmailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
