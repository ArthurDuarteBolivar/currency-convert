import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LembreteComponentComponent } from './lembrete-component.component';

describe('LembreteComponentComponent', () => {
  let component: LembreteComponentComponent;
  let fixture: ComponentFixture<LembreteComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LembreteComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LembreteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
