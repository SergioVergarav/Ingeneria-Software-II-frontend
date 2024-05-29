import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprobarformComponent } from './aprobarform.component';

describe('AprobarformComponent', () => {
  let component: AprobarformComponent;
  let fixture: ComponentFixture<AprobarformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AprobarformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AprobarformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
