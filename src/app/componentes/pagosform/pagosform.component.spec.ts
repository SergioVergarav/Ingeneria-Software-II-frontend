import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagosformComponent } from './pagosform.component';

describe('PagosformComponent', () => {
  let component: PagosformComponent;
  let fixture: ComponentFixture<PagosformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagosformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagosformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
