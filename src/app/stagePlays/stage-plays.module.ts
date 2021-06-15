import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StagePlaysComponent } from './stage-plays.component';
import { StagePlayMaterialModule } from './stage-plays-material.module';
import { StagePlayRoutingModule } from './stage-plays-routing.module';
import { StoreModule } from '@ngrx/store';
import { stagePlayStateFeatureKey } from './store/stage-play.state';
import { stagePlayReducer } from './store/stage-play.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StagePlayEffects } from './store/stage-play.effects';
import { StagePlayProxyService } from './services/stage-play-proxy.service';
import { StagePlayStoreFacadeService } from './store/stage-play-store-facade.service';
import { HttpClientModule } from '@angular/common/http';
import { StagePlayDetailsComponent } from './components/stage-play-details/stage-play-details.component';
import { StagePlayComponent } from './components/stage-play/stage-play.component';

@NgModule({
  declarations: [StagePlaysComponent, StagePlayComponent, StagePlayDetailsComponent],
  imports: [
    CommonModule,
    StagePlayMaterialModule,
    StagePlayRoutingModule,
    HttpClientModule,
    StoreModule.forFeature(stagePlayStateFeatureKey, stagePlayReducer),
    EffectsModule.forFeature([StagePlayEffects]),
  ],
  exports: [StagePlaysComponent],
  providers: [StagePlayProxyService, StagePlayStoreFacadeService],
})
export class StagePlaysModule {}
