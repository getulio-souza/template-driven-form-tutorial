import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'template-driven-form';
  disabledBtn: boolean = false;

  @ViewChild('registrationForm') form!: NgForm

    ngOnInit(): void {
        console.log(this.form)
    }

  onFormSubmitted(form: NgForm) {
    console.log(this.form.valid)
    // console.log(this.form.controls['firstName'].value);
    // console.log(this.form.controls['lastName'].value);
    this.disabledBtn = true;
  }

  isFormValid() {
    return this.form?.valid ?? false;
  }
}
