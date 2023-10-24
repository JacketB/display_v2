import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModernProgressBarComponent } from './modern-progress-bar.component';

describe('ModernProgressBarComponent', () => {
  let component: ModernProgressBarComponent;
  let fixture: ComponentFixture<ModernProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModernProgressBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModernProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
