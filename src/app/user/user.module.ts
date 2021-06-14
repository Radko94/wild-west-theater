import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserMaterialModule } from './user-material.module';
import { UserRoutingModule } from './user-routing.module';
import { UserProxyService } from './services/user-proxy.service';
import { StoreModule } from '@ngrx/store';
import { userStateFeatureKey } from './store/user.state';
import { userReducer } from './store/user.reducer';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/user.effects';
import { HttpClientModule } from '@angular/common/http';
import { UserStoreFacadeService } from './store/user-store-facade.service';

@NgModule({
  declarations: [UserComponent, LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserMaterialModule,
    UserRoutingModule,
    HttpClientModule,
    StoreModule.forFeature(userStateFeatureKey, userReducer),
    EffectsModule.forFeature([UserEffects]),
  ],
  exports: [UserComponent],
  providers: [UserProxyService, UserStoreFacadeService],
})
export class UserModule {}
