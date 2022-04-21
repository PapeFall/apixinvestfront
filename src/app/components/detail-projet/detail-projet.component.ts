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
  constructor(private activateRoute: ActivatedRoute, private projetService: ProjetsService) { 
    new Promise(resolve =>{
      this.scripts.forEach((script)=>this.loadScript(script))
      // this.loadScript()
    })
  }
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
          this.projet = this.projets?.energie.filter((v:any,i:any,arr:any)=>{
            return v.id==index
          })[0];
          this.projetRecommandes= this.projets.energie.filter((v:any,i:any,arr:any)=>{
            return v.id!=index
          })
          break;
        case 'industrie':
          this.projet = this.projets?.industrie.filter((v:any,i:any,arr:any)=>{
            return v.id==index
          })[0];
          this.projetRecommandes= this.projets.industrie.filter((v:any,i:any,arr:any)=>{
            return v.id!=index
          })
          break;
        case 'technologie':
          this.projet = this.projets?.technologie.filter((v:any,i:any,arr:any)=>{
            return v.id==index
          })[0];
          this.projetRecommandes= this.projets.technologie.filter((v:any,i:any,arr:any)=>{
            return v.id!=index
          })
          break;
        case 'transport':
          this.projet = this.projets?.transport.filter((v:any,i:any,arr:any)=>{
            return v.id==index
          })[0];
          this.projetRecommandes= this.projets.transport.filter((v:any,i:any,arr:any)=>{
            return v.id!=index
          })
          break;
        case 'sante':
          this.projet = this.projets?.sante.filter((v:any,i:any,arr:any)=>{
            return v.id==index
          })[0];
          this.projetRecommandes= this.projets.sante.filter((v:any,i:any,arr:any)=>{
            return v.id!=index
          })
          break;
      }
    });
  }

  scripts = [
    'assets/apix2/js/custom.js',
    "assets/apix2/js/revolution-slider/js/extensions/revolution.extension.actions.min.js",
  
    "assets/apix2/js/revolution-slider/js/extensions/revolution.extension.carousel.min.js",
  
    "assets/apix2/js/revolution-slider/js/extensions/revolution.extension.kenburn.min.js",
  
    "assets/apix2/js/revolution-slider/js/extensions/revolution.extension.layeranimation.min.js",
  
    "assets/apix2/js/revolution-slider/js/extensions/revolution.extension.migration.min.js",
  
    "assets/apix2/js/revolution-slider/js/extensions/revolution.extension.navigation.min.js",
  
    "assets/apix2/js/revolution-slider/js/extensions/revolution.extension.parallax.min.js",
  
    "assets/apix2/js/revolution-slider/js/extensions/revolution.extension.slideanims.min.js",
  
    "assets/apix2/js/revolution-slider/js/extensions/revolution.extension.video.min.js",
    
    'assets/apix2/js/custom2home.js'
  ]
  public loadScript(script:string){
    const node = document.createElement('script');
    // node.src =     'assets/apix2/js/custom.js';
    node.src = script
    node.type='text/javascript';
    node.async=true;
    node.charset='utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
  }
}
