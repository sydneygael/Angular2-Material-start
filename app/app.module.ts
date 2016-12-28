import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import {AlertModule} from "ng2-bootstrap";
import {MaterialModule} from "@angular/material";

@NgModule({
  imports:      [ BrowserModule,
                  AlertModule.forRoot(),
                  MaterialModule.forRoot()],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */