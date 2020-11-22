import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { EditCourseComponent } from './edit-course/edit-course.component';

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

  constructor(private dialog: MatDialog) {
    this.timer = setInterval(() => {
      this.progress++;
      if (this.progress === 100) {
        clearInterval(this.timer);
      }
    }, 20);
  }

  changeSelected($event): void {
    console.log($event);
  }

  selectCategory(category): void {
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

  openDialog(): void {
    this.dialog
      .open(EditCourseComponent, {
        data: { courseId: 1 },
      })
      .afterClosed()
      .subscribe((result) => console.log(result));
  }
}
