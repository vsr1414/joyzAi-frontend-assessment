import { Component, signal } from '@angular/core';
import { TreeRepresentation } from '../components/tree-representation/tree-representation';

@Component({
  selector: 'app-root',
  imports: [TreeRepresentation],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('joyzai-assessment');
}
