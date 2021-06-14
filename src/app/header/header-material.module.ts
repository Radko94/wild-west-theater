import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  exports: [MatToolbarModule, MatButtonModule, MatSnackBarModule],
})
export class HeaderMaterialModule {}
