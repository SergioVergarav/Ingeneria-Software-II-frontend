import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesformComponent } from "./solicitudesform.component";

describe('SolicitudesformComponent', () => {
  let component: SolicitudesformComponent;
  let fixture: ComponentFixture<SolicitudesformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitudesformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudesformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
