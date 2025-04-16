import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GridAdocaoAnimaisComponent } from './grid-adocao-animais/grid-adocao-animais.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GridAdocaoAnimaisComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Abrigo Mei Mei';

}

