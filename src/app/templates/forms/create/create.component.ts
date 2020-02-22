import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  // NOTE Array
  editUserDataArray = [
    {
      id: 1,
      name: 'user 1',
      email: 'user1@MediaList.coml',
      address: 'address 1',
      mobile: '01234567801'
    },
    {
      id: 2,
      name: 'user 2',
      email: 'user2@MediaList.coml',
      address: 'address 2',
      mobile: '01234567802'
    },
    {
      id: 3,
      name: 'user 3',
      email: 'user3@MediaList.coml',
      address: 'address 3',
      mobile: '01234567803'
    },
    {
      id: 4,
      name: 'user 4',
      email: 'user4@MediaList.coml',
      address: 'address 4',
      mobile: '01234567804'
    },
    {
      id: 5,
      name: 'user 5',
      email: 'user5@MediaList.coml',
      address: 'address 5',
      mobile: '01234567805'
    }
  ];
  updateMode = false;
  userId;

  userIndex;

  // NOTE  Forms
  createForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
    mobile: new FormControl('')
  });

  submitButtonTittle = 'Create';
  constructor(private activatedRout: ActivatedRoute) {}

  ngOnInit() {
    this.checkQueryParams();
    this.checkHiddenId();
  }

  // NOTE  number Validation fun
  numberCheckValidation(e) {
    if ((48 <= e.keyCode && e.keyCode <= 57) || e.keyCode === 46) {
    } else {
      return false;
    }
  }

  checkHiddenId() {
    if (history.state.id) {
      this.updateMode = history.state.updateMode;
      this.userId = history.state.id;
      this.submitButtonTittle = 'Edit';
      this.displayUserData();
    }
  }

  checkQueryParams() {
    this.activatedRout.queryParams.subscribe(queryParams => {
      if (queryParams.updateMode) {
        this.updateMode = queryParams.updateMode;
        this.userId = +queryParams.id;
        this.submitButtonTittle = 'Edit';
        this.displayUserData();
      }
    });
  }

  displayUserData() {
    if (this.updateMode) {
      for (const user of this.editUserDataArray) {
        if (user.id === this.userId) {
          this.userIndex = this.editUserDataArray.indexOf(user);
        }
      }

      this.createForm.patchValue({
        name: this.editUserDataArray[this.userIndex].name,
        email: this.editUserDataArray[this.userIndex].email,
        address: this.editUserDataArray[this.userIndex].address,
        mobile: this.editUserDataArray[this.userIndex].mobile
      });
    }
  }

  // *********************
  onSubmit() {
    console.log('onSubmit >> ', this.createForm.value);
  }


  ViewChildFun(data?){

    console.log("data in child is >>> ", data)
  }
}
