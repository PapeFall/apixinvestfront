import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  profils = ["Porteur de projets","Partenaire","Participant"];
  constructor() {
    new Promise(resolve =>{
      this.scripts.forEach((script)=>this.loadScript(script))
      // this.loadScript()
    })
   }

  ngOnInit(): void {
   
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
