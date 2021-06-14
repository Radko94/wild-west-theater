import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderMaterialModule } from './header-material.module';

import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    HeaderMaterialModule,
    RouterModule,
  ],
  exports: [HeaderComponent, RouterModule],
})
export class HeaderModule {}
