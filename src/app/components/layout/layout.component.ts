import { CommonModule } from '@angular/common';
import { Component,HostListener, OnInit } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterModule, CommonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  barraReduzida = false;
  
  constructor(private router: Router){}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.barraReduzida = offset > 10; // Ajuste este valor conforme necessário
  }

  irParaPagina(pagina: string){
    this.router.navigate([`/${pagina}`]);
}
ngOnInit() {}
}
