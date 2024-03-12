import { Component,Input,input } from '@angular/core';
import { vakterkep } from '../vakterkep';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-terkep',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './terkep.component.html',
  styleUrl: './terkep.component.css'
})
export class TerkepComponent {
  @Input() terkep!: vakterkep;
}
