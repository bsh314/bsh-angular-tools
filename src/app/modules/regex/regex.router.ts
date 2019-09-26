import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegexToolComponent } from './components/regex-tool/regex-tool.component';

const routes: Routes = [
    {path: '', component: RegexToolComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegexRoutingModule { } 