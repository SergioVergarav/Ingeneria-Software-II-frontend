import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariosformComponent } from './formulariosform.component';

describe('FormulariosformComponent', () => {
  let component: FormulariosformComponent;
  let fixture: ComponentFixture<FormulariosformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulariosformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormulariosformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
