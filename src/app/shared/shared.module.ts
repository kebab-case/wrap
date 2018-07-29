import { NgModule, ModuleWithProviders } from '@angular/core';
import { CardComponent } from './card/card.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { SpotifyLinkComponent } from './card/spotify-link.component';

console.log(SpotifyLinkComponent)

@NgModule({
  declarations: [
    CardComponent,
    SearchbarComponent
    SpotifyLinkComponent,
  ],
  exports: [
    CardComponent,
    SearchbarComponent,
    SpotifyLinkComponent,
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}