import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RicercaContattiComponent } from './ricerca-contatti.component';

describe('RicercaContattiComponent', () => {
  let component: RicercaContattiComponent;
  let fixture: ComponentFixture<RicercaContattiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RicercaContattiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RicercaContattiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
