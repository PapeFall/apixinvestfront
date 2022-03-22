import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  width_header = 'default';

  constructor() { }

  ngOnInit(): void {
    this.width_header = 'default';
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



}
