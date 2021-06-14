import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryComponent } from './library.component';
import { LibraryMaterialModule } from './library-material.module';
import { LibraryRoutingModule } from './library-routing.module';

@NgModule({
  declarations: [LibraryComponent],
  imports: [
    CommonModule,
    LibraryMaterialModule,
    LibraryRoutingModule,
  ],
  exports: [LibraryComponent],
})
export class LibraryModule {}
