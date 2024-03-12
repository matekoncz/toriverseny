import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TerkepComponent } from './terkep/terkep.component';
import { vakterkep } from './vakterkep';
import { alap } from './alap_jatek';
import { JatekPanelComponent } from './jatek-panel/jatek-panel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TerkepComponent,JatekPanelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'toriv_angular';
  akt_terkep: vakterkep;

  constructor(){
    this.akt_terkep=alap;
  }
  

}
