import { Component, Input } from '@angular/core';
import { vakterkep } from '../vakterkep';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-jatek-panel',
  standalone: true,
  imports: [NgIf],
  templateUrl: './jatek-panel.component.html',
  styleUrl: './jatek-panel.component.css'
})
export class JatekPanelComponent {
  jatekOn = false;
  @Input() terkep!: vakterkep;
}
