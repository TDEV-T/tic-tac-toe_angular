import { CommonModule, NgIf } from '@angular/common';
import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-button-game',
  standalone: true,
  imports: [NgIf,CommonModule],
  template:`
  <button *ngIf="!value" [disabled]="winner != null || winner != undefined">{{value}}</button>
  <button  *ngIf="value === 'X' || value === 'O'" [disabled]="winner != null || winner != undefined" >{{value}}</button>
  `,
  styleUrl: './button-game.component.scss'
})
export class ButtonGameComponent {
  @Input() value: 'X' | 'O' | undefined ;
  @Input() winner:  null | undefined;
}
