import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentMainComponent } from './component-main.component';

describe('ComponentMainComponent', () => {
  let component: ComponentMainComponent;
  let fixture: ComponentFixture<ComponentMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
