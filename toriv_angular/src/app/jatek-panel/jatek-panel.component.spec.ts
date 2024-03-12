import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JatekPanelComponent } from './jatek-panel.component';

describe('JatekPanelComponent', () => {
  let component: JatekPanelComponent;
  let fixture: ComponentFixture<JatekPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JatekPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JatekPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
