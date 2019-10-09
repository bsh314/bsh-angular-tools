import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Regexp from '../../interfaces/regexp';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-regex-options',
  templateUrl: './regex-options.component.html',
  styleUrls: ['./regex-options.component.scss']
})
export class RegexOptionsComponent implements OnInit {

  _regexp: Regexp;
  _subscriptions: Subscription[] = [];

  @Output() onChange = new EventEmitter();

  constructor() { }

  @Input()
  set regexp(value: Regexp) {
    this._regexp = value;
  }

  ngOnInit() {
    this.onChange.subscribe(() => {
      this._regexp.update();
    })
  }
}
