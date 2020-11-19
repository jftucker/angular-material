import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  username = new FormControl('', [Validators.required]);
  minDate = new Date(2020, 10, 1);
  maxDate = new Date(2021, 0, 1);

  getErrorMessage(): string {
    return this.username.hasError('required')
      ? 'The username field is required.'
      : '';
  }
}
