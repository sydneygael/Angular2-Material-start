import { Component } from '@angular/core';
//noinspection TypeScriptCheckImport
import {MATERIAL_DIRECTIVES} from 'ng2-material';
@Component({
  selector: 'my-app',
  templateUrl: 'app/basic.html',
  styleUrls: ['app/style.css'],
  directives: [MATERIAL_DIRECTIVES]
})
export class AppComponent {
  googleUrl: string = 'https://www.google.com';
  title1: string = 'Button';
  title4: string = 'Warn';
  isDisabled: boolean = true;
}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
