import { Component, OnInit } from '@angular/core';

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

  submitButtonTittle = 'Create';
  constructor() {}

  ngOnInit() {}
}
