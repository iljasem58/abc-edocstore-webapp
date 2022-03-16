import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  id: string;
  name: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 'REP:100001', name: 'Rep1' },
  { id: 'REP:100002', name: 'Rep2' },
];

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css', '../app.component.css'],
})
export class RepositoriesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name'];
  dataSource = ELEMENT_DATA;
  constructor() {}

  ngOnInit(): void {}
}
