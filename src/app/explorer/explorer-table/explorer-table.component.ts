import {
  AfterViewInit,
  Component, EventEmitter,
  Input,
  OnChanges,
  OnInit, Output,
  ViewChild
} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {DATA_COLLECTION, DEFAULT_DATA, PeriodicElement} from 'src/app/helpers/data';

@Component({
  selector: 'app-explorer-table',
  templateUrl: './explorer-table.component.html',
  styleUrls: ['./explorer-table.component.css'],
})
export class ExplorerTableComponent implements OnInit, OnChanges {
  @Input() selectedFolder: string;
  @Output() clickedRow: EventEmitter<string> = new EventEmitter<string>();

  displayedColumns: string[] = [
    'type',
    'name',
    'id',
    'created',
    'modified',
    'content',
    'comment',
  ];
  // dataSource = this.setTableData(this.selectedFolder);
  dataSource = new MatTableDataSource<PeriodicElement> (DEFAULT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor() {}


  ngOnInit(): void {
  }

   ngOnChanges(): void {
     this.selectedFolder.length > 0 && this.setTableData(this.selectedFolder);
   }

  setTableData(selectedFolder: string) {
    DATA_COLLECTION.forEach((folder) => {
      if (selectedFolder === folder.folderName) {
        this.dataSource = new MatTableDataSource<PeriodicElement>(folder.data);
        this.dataSource.paginator= this.paginator;
      }
      return;
    });
  }

  clickedRows = new Set<PeriodicElement>();

}
