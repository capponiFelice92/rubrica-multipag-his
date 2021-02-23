import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaConteggioContattiComponent } from './pagina-conteggio-contatti.component';

describe('PaginaConteggioContattiComponent', () => {
  let component: PaginaConteggioContattiComponent;
  let fixture: ComponentFixture<PaginaConteggioContattiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaConteggioContattiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaConteggioContattiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
