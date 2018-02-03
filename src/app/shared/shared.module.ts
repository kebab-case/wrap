import { NgModule, ModuleWithProviders } from '@angular/core';

import { CardComponent } from './card/card.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { FabComponent } from './fab/fab.component';

@NgModule({
  declarations: [
    CardComponent,
    SearchbarComponent,
    FabComponent
  ],
  exports: [
    CardComponent,
    SearchbarComponent,
    FabComponent
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