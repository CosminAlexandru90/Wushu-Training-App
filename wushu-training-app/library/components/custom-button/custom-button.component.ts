import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss'],
})
export class CustomButtonComponent implements OnInit {
  @Input()
  type: string = 'button';

  @Input()
  text: string = '[default text]';

  @Input()
  size: string = 'huge';

  customization: string = 'test';

  constructor() {}
  ngOnInit(): void {
    console.log(this.size);

    switch (this.size) {
      case 'small':
        this.customization = 'px-2 rounded-sm text-sm';
        break;
      case 'medium':
        this.customization = 'px-4 py-2 rounded-md text-md';
        break;
      case 'large':
        this.customization = 'px-6 py-4 rounded-lg text-lg';
        break;
      case 'huge':
        this.customization = 'px-8 py-6 rounded-3xl text-2xl';
        break;
      default:
        console.log(this.size);
    }
  }
}
