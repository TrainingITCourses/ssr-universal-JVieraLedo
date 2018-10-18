import {APIService, Ilaunch, IoptSelected} from '../api.service';
import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';

export enum enumTypeRules {
  State,
  Agency,
  TypeMission
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ls-landing',
  templateUrl: './ls-landing.component.html',
  styleUrls: ['./ls-landing.component.css']
})
export class LsLandingComponent implements OnInit {

  public rules: enumTypeRules;
  public tittleValues = 'Type of search ';
  public tittleRules = 'Values ';
  public ruleSelected: string;
  public valueSelected: string;
  public rulesValues: Array<IoptSelected>;
  public launches: Array<Ilaunch>;
  public typeRules = Object.keys(enumTypeRules)
    .slice(Object.keys(enumTypeRules).length / 2)
    .map(function (value, key) {
      return {
        value: key,
        viewValue: value
      };
    });

  constructor(public API: APIService) {
    this.API.loading.subscribe(response => {
      console.log('RESPONSE API', response);
    });
  }

  ngOnInit() {
  }

  changeTypeRule(value): void {
    this.ruleSelected = value;
    this.readRulesIn(+value);
  }

  readRulesIn(e): void {
    this.rules = e;
    switch (e) {
      case enumTypeRules.State:
        this.rulesValues = this.API.states;
        break;
      case enumTypeRules.Agency:
        this.rulesValues = this.API.agencies;
        break;
      case enumTypeRules.TypeMission:
        this.rulesValues = this.API.kindMission;
        break;
    }
    this.changeValues(this.rulesValues[0].value);
  }

  changeValues(v): void {
    this.valueSelected = v;
    switch (this.rules) {
      case enumTypeRules.State:
        this.launches = this.API.launches.filter(x => x.status === Number(v));
        break;
      case enumTypeRules.Agency:
        this.launches = this.API.launches.filter((x) => x.lsp === String(v));
        break;
      case enumTypeRules.TypeMission:
        this.launches = this.API.launches.filter((x) => x.missionId === v);
        break;
    }
  }
}
