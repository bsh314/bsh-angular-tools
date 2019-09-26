import { Component, OnInit } from '@angular/core';
import { RegExpList } from '../../templates/list';
@Component({
  selector: 'app-regex-tool',
  templateUrl: './regex-tool.component.html',
  styleUrls: ['./regex-tool.component.scss']
})
export class RegexToolComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const test = RegExpList[0];

    test.setOption(test.options[0]);
    test.setOption(test.options[1]);

    test.eval('test');
  }

}
