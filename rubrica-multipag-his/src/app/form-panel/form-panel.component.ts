import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModeratorService } from '../moderator.service';
import { Persona } from '../persona';

@Component({
  selector: 'app-form-panel',
  templateUrl: './form-panel.component.html',
  styleUrls: ['./form-panel.component.css']
})
export class FormPanelComponent implements OnInit {
  @Output() contaEvent = new EventEmitter<string>();
  @Output() cercaEvent = new EventEmitter<string>();
  @Input() valInputNome: string;
  @Input() valInputCognome: string;
  @Input() valInputTelefono: string;

  nome: string;
  cognome: string;
  telefono: string;
  persona = new Persona();

  constructor(public med: ModeratorService) { }

  ngOnInit(): void {
    this.nome = this.valInputNome;
    this.cognome = this.valInputCognome;
    this.telefono = this.valInputTelefono;
  }
  conta() {
    this.contaEvent.emit("sono contaEvent e sono passato");
  }

  cerca() {
    this.cercaEvent.emit("sono cercaEvent e sono passato");
  }

  aggiungi() {
    this.med.lista.push(this.persona);
    this.persona = new Persona();
  }
}
