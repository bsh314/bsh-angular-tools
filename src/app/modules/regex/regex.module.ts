import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { NgModule } from '@angular/core';
import { RegexRoutingModule } from './regex.router';
import { RegexToolComponent } from './components/regex-tool/regex-tool.component';
import { RegexControlsComponent } from './components/regex-controls/regex-controls.component';
import { RegexOptionsComponent } from './components/regex-options/regex-options.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputSwitchModule } from 'primeng/inputswitch';


@NgModule({
  declarations: [
    RegexToolComponent,
    RegexControlsComponent,
    RegexOptionsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DropdownModule,
    MultiSelectModule,
    RegexRoutingModule,
    InputTextModule,
    InputSwitchModule,
  ]
})
export class RegexModule { }
