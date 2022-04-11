import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router) { }

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
}
