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

  private list: DropdownItem[] = RegExpList.map(item => ({label: item.name, value: item}));

  public currentRegexp: Regexp = this.getDefaultRegexp();
  public currentResults: {input: string, output: any}[] = [];

  constructor() { }

  ngOnInit() {
    this.updateExamples();
    /*
    const test = RegExpList[0];

    test.setOption(test.options[0]);
    test.setOption(test.options[1]);
    test.setOption(test.options[2]);
    test.setOption(test.options[3]);

    for (let i = 0; i < test.examples.length; i++) {
      test.eval(test.examples[i]);
    }
    */
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
