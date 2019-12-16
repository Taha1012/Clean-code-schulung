import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';

import { ReadFileComponent } from './read-file/read-file.component';

@NgModule({
  declarations: [
    AppComponent,
    ReadFileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, MatTableModule, MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
