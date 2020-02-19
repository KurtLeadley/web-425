import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'leadley-template-forms';
  // do this on form submit
  onSubmit(formData) {
    console.log(formData)
  }
}
