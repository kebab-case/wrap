import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TabsModule } from './tabs/tabs.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { HeaderComponent } from './header/header.component';
import { SettingsComponent } from './settings/settings.component';
import { FavoritesComponent } from './favorites/favorites.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddComponent,
    SettingsComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    TabsModule,
    SharedModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
