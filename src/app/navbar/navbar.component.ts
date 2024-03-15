import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() categorySelected = new EventEmitter<string>();
  @Input() categories: { name: string; qa: { question: string; answer: string; showAnswer: boolean }[] }[] = [];

  selectCategory(category: any) {
    this.categorySelected.emit(category);
  }
}
