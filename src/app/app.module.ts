import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectlistsComponent } from './views/projectlists/projectlists.component';

import {
  CardModule,
  GridModule,
  TableModule,
  UtilitiesModule,
} from '@coreui/angular';

@NgModule({
  declarations: [AppComponent, ProjectlistsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    GridModule,
    TableModule,
    UtilitiesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
