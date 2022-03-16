import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-repository',
  templateUrl: './create-repository.component.html',
  styleUrls: ['./create-repository.component.css', '../../app.component.css'],
})
export class CreateRepositoryComponent implements OnInit {
  repositoryCreateFrom: FormGroup = new FormGroup({
    'name': new FormControl(null),
    'description': new FormControl(null),
    'productName': new FormControl(null),
    'productVersion': new FormControl(null),
    'vendorName': new FormControl(null),
    'thinClientURI': new FormControl(null),
  });
  constructor() {
    
  }
  
  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.repositoryCreateFrom);
  }
}
