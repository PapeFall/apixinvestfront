import { Component, OnInit } from '@angular/core';
import { ProjetsService } from 'src/app/services/projets.service';

@Component({
  selector: 'app-search-projet',
  templateUrl: './search-projet.component.html',
  styleUrls: ['./search-projet.component.scss']
})
export class SearchProjetComponent implements OnInit {

  constructor(private projetService: ProjetsService) { }

  projets:any=null;
  secteurs = [
    "Agriculture",
    "Education",
    "Energie et mines",
    "Industrie et commerce",
    "Technologie",
    "Transport",
    "Santé"  ]
  
    regions=[
      'DAKAR',
      'THIES',
      'LOUGA',
      'KAOLACK'
    ]
  ngOnInit(): void {
    this.projets = this.projetService.getProjets()
  }

}
