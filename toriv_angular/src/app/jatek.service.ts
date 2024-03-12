import { Inject, Injectable } from '@angular/core';
import { vakterkep } from './vakterkep';

@Injectable({
  providedIn: 'root'
})
export class JatekService {
  terkep: vakterkep;
  allas: Map<string,number>;
  pontszam = 0;
  ossz: number;
  eddig = 0;

  constructor(@Inject("terkep") terkep: vakterkep) {
    this.terkep= terkep;
    this.allas = new Map();
    terkep.pontok.forEach((ertek,kulcs)=>{this.allas.set(kulcs,0)});
    this.ossz = this.terkep.pontok.keys.length;
   }
}
