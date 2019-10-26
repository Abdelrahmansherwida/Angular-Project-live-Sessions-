import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  @Input() showEditChildTrigger;
  @Output() showEditChildTriggerChange = new EventEmitter<boolean>();
  @Output() dataFromChild = new EventEmitter<any>();

  editForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
    mobile: new FormControl('')
  });

  constructor() {}

  ngOnInit() {}

  hide() {
    this.showEditChildTriggerChange.emit(!this.showEditChildTrigger);
  }

  numberValidation(e) {
    if ((48 <= e.keyCode && e.keyCode <= 57) || e.keyCode === 46) {
    } else {
      return false;
    }
  }

  passDataFromChildToParent() {
    this.dataFromChild.emit(this.editForm);
    this.hide();
  }
}
