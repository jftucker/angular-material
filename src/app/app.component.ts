import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  categories = [
    { name: 'Beginner' },
    { name: 'Intermediate' },
    { name: 'Advanced' },
  ];
  username = new FormControl('', [Validators.required]);
  minDate = new Date(2020, 10, 1);
  maxDate = new Date(2021, 0, 1);
  progress = 0;
  timer;

  constructor() {
    this.timer = setInterval(() => {
      this.progress++;
      if (this.progress == 100) clearInterval(this.timer);
    }, 20);
  }

  changeSelected($event): void {
    console.log($event);
  }

  selectCategory(category) {
    this.categories
      .filter((c) => c != category)
      .forEach((c) => (c['selected'] = false));

    category.selected = !category.selected;
  }

  getErrorMessage(): string {
    return this.username.hasError('required')
      ? 'The username field is required.'
      : '';
  }
}
