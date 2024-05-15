import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetasformComponent } from './tarjetasform.component';

describe('TarjetasformComponent', () => {
  let component: TarjetasformComponent;
  let fixture: ComponentFixture<TarjetasformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetasformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TarjetasformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
