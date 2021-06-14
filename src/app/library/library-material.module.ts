import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  exports: [MatSnackBarModule, MatCardModule, MatButtonModule],
})
export class LibraryMaterialModule {}
