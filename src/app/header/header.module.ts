import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderMaterialModule } from './header-material.module';

import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, HeaderMaterialModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
