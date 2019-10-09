import { Component, OnInit } from '@angular/core';
import { Regexp } from '../../interfaces/regexp';
import { RegExpList } from '../../templates/list';
import { DropdownItem } from '../../interfaces/dropdown-item';
import RegexpVariant from '../../interfaces/regexp-variant';

@Component({
  selector: 'app-regex-tool',
  templateUrl: './regex-tool.component.html',
  styleUrls: ['./regex-tool.component.scss']
})
export class RegexToolComponent implements OnInit {

  list: DropdownItem[] = RegExpList.map(item => ({label: item.name, value: item}));

  currentRegexp: Regexp = this.getDefaultRegexp();
  currentResults: {input: string, output: any}[] = [];

  constructor() { }

  ngOnInit() {
    this.updateExamples();
  }

  updateExamples(): void {
    const output = [];
    for (let i = 0; i < this.currentRegexp.examples.length; i++) {
      const example = this.currentRegexp.examples[i];
      output.push({
        input: example,
        output: this.currentRegexp.eval(example),
      })
    }
    this.currentResults = output;
  }

  private getDefaultRegexp(): Regexp {
    return this.list && this.list.length > 0 ? this.list[0].value : undefined;
  }
}
