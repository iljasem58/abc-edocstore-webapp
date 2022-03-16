import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';
import {Folders, PeriodicElement, TREE_DATA} from '../helpers/data';
import { DataCollection, DATA_COLLECTION, DEFAULT_DATA } from '../helpers/data';
import {MatTableDataSource} from "@angular/material/table";

interface Comment {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.css', '../app.component.css'],
})
export class ExplorerComponent implements OnInit {
  treeControl = new NestedTreeControl<Folders>((node) => node.children);
  dataSource = new MatTreeNestedDataSource<Folders>();
  dataColl = new MatTreeNestedDataSource<DataCollection>();
  treeExpanded: boolean = false;
  commentExpanded: boolean = false;
  folderSelected: string = '';
  selectedRow: any = null;
  selected = 'Not chosen';
  textarea= 'your comment';
  displayVal:string='';

  comments: Comment[] = [
    {value: 'Done', viewValue: 'Done'},
    {value: 'In progress', viewValue: 'In progress'},
    {value: 'Review the document', viewValue: 'Please review'},
    {value: 'Modify', viewValue: 'Modify'},
  ];

  constructor() {
    this.dataSource.data = TREE_DATA;
    this.dataColl.data = DATA_COLLECTION;
  }

  hasChild = (_: number, node: Folders) =>
    !!node.children && node.children.length > 0;

  toggleTree() {
    this.treeExpanded = !this.treeExpanded;
  }

  toggleComment() {
    this.commentExpanded = !this.commentExpanded;
  }

  renameDoc() {
    this.dataColl.data;
  }

  setRowClicked(value:any){
    console.log(value)
    this.selectedRow = value;
  }

  getVal(val: string, folderSelected: string) {
    DATA_COLLECTION.forEach((folder) => {
      if(folderSelected === folder.folderName){
        folder.data.forEach((item)=>{
          if (item.id === this.selectedRow.id) {
            item.comment = val;
          }
        })
      }
      return;
    });
  }

  ngOnInit(): void {}
}
