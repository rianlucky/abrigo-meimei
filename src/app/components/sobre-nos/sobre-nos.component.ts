import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre-nos',
  imports: [],
  templateUrl: './sobre-nos.component.html',
  styleUrl: './sobre-nos.component.css'
})
export class SobreNosComponent {

  animarBtn(event: MouseEvent): void {
    const btn = event.target as HTMLElement;
    btn.style.backgroundColor = '#f8cbd2';
    btn.style.color = 'white';
  }

  resetarBtn(event: MouseEvent): void {
    const btn = event.target as HTMLElement;
    btn.style.backgroundColor = 'white';
    btn.style.color = '#444';
  }
}
