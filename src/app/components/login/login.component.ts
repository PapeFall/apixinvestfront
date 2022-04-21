import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router) {
    new Promise(resolve =>{
      this.scripts.forEach((script)=>this.loadScript(script))
      // this.loadScript()
    })
   }

  formGroup: FormGroup = this.formBuilder.group({
    email: ["", [Validators.required, Validators.email]],
    password: ['', Validators.required]
  })
  loginError = false;
  ngOnInit(): void {
   
  }

  onSubmit() {
    if (this.formGroup.valid) {
      if (this.formGroup.value.email == "porteur@gmail.com" && this.formGroup.value.password == "123456") {
        localStorage.setItem("user", JSON.stringify({ username: 'Hamid', profil: 'porteur' }))
        this.router.navigateByUrl("/process/dashboard");
      } else if (this.formGroup.value.email == "participant@gmail.com" && this.formGroup.value.password == "123456") {
        localStorage.setItem("user", JSON.stringify({ username: 'Moussa Diop', profil: 'participant' }))
        this.router.navigateByUrl("/process/dashboard/favoris");
      } else if (this.formGroup.value.email == "intervenant@gmail.com" && this.formGroup.value.password == "123456") {
        localStorage.setItem("user", JSON.stringify({ username: 'Fatim Wade', profil: 'intervenant' }))
        this.router.navigateByUrl("/process/dashboard");
      } else if (this.formGroup.value.email == "partenaire@gmail.com" && this.formGroup.value.password == "123456") {
        localStorage.setItem("user", JSON.stringify({ username: 'Joseph Sarr', profil: 'partenaire' }))
        this.router.navigateByUrl("/process/dashboard");
      } else if (this.formGroup.value.email == "admin@gmail.com" && this.formGroup.value.password == "123456") {
        localStorage.setItem("user", JSON.stringify({ username: 'Aliou Ndiaye', profil: 'admin' }))
        this.router.navigateByUrl("/process/dashboard");
      } else {
        this.loginError = true;
      }

    }
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
