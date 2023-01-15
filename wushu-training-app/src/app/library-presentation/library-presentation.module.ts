import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryPresentationComponent } from './library-presentation.component';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsPresentationComponent } from './buttons-presentation/buttons-presentation.component';
import { InputsPresentationComponent } from './inputs-presentation/inputs-presentation.component';
import { ModalsPresentationComponent } from './modals-presentation/modals-presentation.component';
import { CustomButtonModule } from 'library/components/custom-button/custom-button.module';

const routes: Routes = [
  {
    path: '',
    component: LibraryPresentationComponent,
    children: [
      {
        path: 'buttons',
        component: ButtonsPresentationComponent,
      },
      {
        path: 'inputs',
        component: InputsPresentationComponent,
      },
      {
        path: 'modals',
        component: ModalsPresentationComponent,
      },
      {
        path: '',
        redirectTo: 'buttons',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  declarations: [
    LibraryPresentationComponent,
    ButtonsPresentationComponent,
    InputsPresentationComponent,
    ModalsPresentationComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), CustomButtonModule],
  exports: [RouterModule],
})
export class LibraryPresentationModule {}
