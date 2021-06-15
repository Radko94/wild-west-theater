import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryComponent } from './library.component';
import { LibraryMaterialModule } from './library-material.module';
import { LibraryRoutingModule } from './library-routing.module';
import { StoreModule } from '@ngrx/store';
import { libraryStateFeatureKey } from './store/library.state';
import { libraryReducer } from './store/library.reducer';
import { EffectsModule } from '@ngrx/effects';
import { LibraryEffects } from './store/library.effects';
import { LibraryProxyService } from './services/library-proxy.service';
import { LibraryStoreFacadeService } from './store/library-store-facade.service';
import { HttpClientModule } from '@angular/common/http';
import { StagePlayComponent } from './components/stage-play/stage-play.component';
import { StagePlayDetailsComponent } from './components/stage-play-details/stage-play-details.component';

@NgModule({
  declarations: [LibraryComponent, StagePlayComponent, StagePlayDetailsComponent],
  imports: [
    CommonModule,
    LibraryMaterialModule,
    LibraryRoutingModule,
    HttpClientModule,
    StoreModule.forFeature(libraryStateFeatureKey, libraryReducer),
    EffectsModule.forFeature([LibraryEffects]),
  ],
  exports: [LibraryComponent],
  providers: [LibraryProxyService, LibraryStoreFacadeService],
})
export class LibraryModule {}
