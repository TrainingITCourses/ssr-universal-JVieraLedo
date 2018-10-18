import {Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy} from '@angular/core';
import {IoptSelected} from '../../api.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ls-landing-rules',
  templateUrl: './searchRule.component.html'
})

export class LsSearchRuleComponent implements OnInit {
  @Input() tittle: String;
  @Input() valueSelected: string;
  @Input() values: IoptSelected[];
  @Output() public changeRule = new EventEmitter<string>();

  constructor() {

  }

  ngOnInit() {

  }

  changeValues() {

    this.changeRule.next(this.valueSelected);
  }
}
