import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PagenotfoundModule } from './pagenotfound/pagenotfound.module';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { ItemsModule } from './items/items.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
    HomeModule,
    PagenotfoundModule,
    ItemsModule,
    NgbModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }