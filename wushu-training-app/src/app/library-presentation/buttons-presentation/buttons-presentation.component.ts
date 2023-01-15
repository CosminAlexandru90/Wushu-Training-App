import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons-presentation',
  templateUrl: './buttons-presentation.component.html',
  styleUrls: ['./buttons-presentation.component.scss'],
})
export class ButtonsPresentationComponent {
  onClick() {
    console.log('button works');
  }
}
