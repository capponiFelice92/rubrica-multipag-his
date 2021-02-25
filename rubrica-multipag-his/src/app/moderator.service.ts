import { Injectable } from '@angular/core';
import { Persona } from './persona';

@Injectable({
  providedIn: 'root'
})
export class ModeratorService {

  lista: Persona[]=[];

  constructor() { }
}
