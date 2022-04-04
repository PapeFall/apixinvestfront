import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjetsService } from 'src/app/services/projets.service';

@Component({
  selector: 'app-detail-projet',
  templateUrl: './detail-projet.component.html',
  styleUrls: ['./detail-projet.component.scss']
})
export class DetailProjetComponent implements OnInit {

  stars = [false, false, false, false, false]
  constructor(private activateRoute: ActivatedRoute, private projetService: ProjetsService) { }
  projet: any;
  projets: any;
  projetRecommandes: any;
  categorie: any;
  initNote() {
    this.stars = [false, false, false, false, false];
  }
  noter(index: number) {
    this.initNote();
    for (let i = 0; i <= index; i++) {
      this.stars[i] = true;
      console.log(this.stars);

    }
  }
  ngOnInit(): void {
    this.projets = this.projetService.getProjets();
    this.activateRoute.params.subscribe((params) => {
      this.categorie = params['categorie'];
      const index = params['id'];
      switch (this.categorie) {
        case 'agriculture':
          this.projet = this.projets?.agriculture.filter((v:any,i:any,arr:any)=>{
            return v.id==index
          })[0];
          this.projetRecommandes= this.projets.agriculture.filter((v:any,i:any,arr:any)=>{
            return v.id!=index
          })
          break;
        case 'education':
          this.projet = this.projets?.education.filter((v:any,i:any,arr:any)=>{
            return v.id==index
          })[0];
          this.projetRecommandes= this.projets.education.filter((v:any,i:any,arr:any)=>{
            return v.id!=index
          })
          break;
        case 'energie':
          break;
        case 'industrie':
          break;
        case 'technologie':
          break;
        case 'transport':
          break;
        case 'sante':
          break;
      }
    });
  }

}
