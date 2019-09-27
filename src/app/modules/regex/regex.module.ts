import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { NgModule } from '@angular/core';
import { RegexRoutingModule } from './regex.router';
import { RegexToolComponent } from './components/regex-tool/regex-tool.component';

@NgModule({
  declarations: [RegexToolComponent],
  imports: [
    CommonModule,
    FormsModule,
    DropdownModule,
    MultiSelectModule,
    RegexRoutingModule,
  ]
})
export class RegexModule { }
