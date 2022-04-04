import { Injectable } from '@angular/core';
import ProjetJson from '../../assets/jsontest/projets.json';

@Injectable({
  providedIn: 'root'
})
export class ProjetsService {
  projets:any = ProjetJson
  constructor() { }
  getProjets(){
    return this.projets;
  }
}
