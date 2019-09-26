import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegexToolComponent } from './components/regex-tool/regex-tool.component';

import { RegexRoutingModule } from './regex.router';

@NgModule({
  declarations: [RegexToolComponent],
  imports: [
    CommonModule,
    RegexRoutingModule
  ]
})
export class RegexModule { }
