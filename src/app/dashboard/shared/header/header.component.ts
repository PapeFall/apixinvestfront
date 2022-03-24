import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  width_header = 'default';

  
  constructor(private router: Router) { }
  user :any= undefined;
  

  ngOnInit(): void {
    this.width_header = 'default';
    let u :any= localStorage.getItem('user');
    this.user = JSON.parse(u);
  }

  createProject(){
    this.toggleSideBar();
    this.router.navigate(['/process/dashboard/project']);
  }

  /**
   * toogleSideBar
   * Méthode  pour fermer le sidebar et adapter le width du header
   *
   */
  toggleSideBar() {
    if (this.width_header === 'default') {
      this.width_header = 'normal';
    }
    else {
      this.width_header = 'default';
    }

    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }


  deconnexion(){
    localStorage.clear();
    this.router.navigateByUrl("/");
  }

  profil(){
    this.router.navigateByUrl("/process/dashboard/profil")
  }
}
