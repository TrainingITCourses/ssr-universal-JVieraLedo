import {Component, OnInit, Input, ChangeDetectionStrategy} from '@angular/core';
import {Ilaunch} from '../../api.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ls-landing-launches',
  templateUrl: './searchLaunches.component.html',
  styleUrls: ['./searchLaunches.component.css']
})
export class LsSearchLaunchesComponent implements OnInit {
  @Input() launches: Array<Ilaunch>;

  constructor() {
  }

  ngOnInit() {
  }

  launchesCount() {
    return !(!this.launches || this.launches.length === 0) ? this.launches.length + ' found.' : 'No data found.';
  }
}
