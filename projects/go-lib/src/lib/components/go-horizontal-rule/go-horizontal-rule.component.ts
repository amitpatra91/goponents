import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'go-horizontal-rule',
  templateUrl: './go-horizontal-rule.component.html',
  styleUrls: ['./go-horizontal-rule.component.scss']
})
export class GoHorizontalRuleComponent implements OnInit {
  @Input() allowPadding: boolean = false;

  constructor() { }

  ngOnInit() {

  }

}