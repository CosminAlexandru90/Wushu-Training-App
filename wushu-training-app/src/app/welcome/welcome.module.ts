import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';
import { CustomButtonModule } from 'library/components/custom-button/custom-button.module';

@NgModule({
  declarations: [WelcomeComponent],
  imports: [CommonModule, CustomButtonModule],
})
export class WelcomeModule {}
