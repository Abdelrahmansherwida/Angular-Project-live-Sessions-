import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() userDataInChild;
  @Input() showDataBindChildTrigger;
  @Output() showDataBindChildTriggerChange = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  hide() {
    this.showDataBindChildTriggerChange.emit(!this.showDataBindChildTrigger);
  }
}
