import { Component, OnInit } from '@angular/core';
import { Regexp } from '../../interfaces/regexp';
import { RegExpList } from '../../templates/list';

@Component({
  selector: 'app-regex-tool',
  templateUrl: './regex-tool.component.html',
  styleUrls: ['./regex-tool.component.scss']
})
export class RegexToolComponent implements OnInit {

  private list: Regexp[] = RegExpList;

  public currentRegexp: Regexp;

  constructor() { }

  ngOnInit() {
    const test = RegExpList[0];

    test.setOption(test.options[0]);
    test.setOption(test.options[1]);
    test.setOption(test.options[2]);
    test.setOption(test.options[3]);

    for (let i = 0; i < test.examples.length; i++) {
      test.eval(test.examples[i]);
    }
  }

}
