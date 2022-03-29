import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit, Output,
  ViewChild
} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';
import {DATA_COLLECTION, DEFAULT_DATA, PeriodicElement} from 'src/app/helpers/data';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-explorer-table',
  templateUrl: './explorer-table.component.html',
  styleUrls: ['./explorer-table.component.css'],
})
export class ExplorerTableComponent implements OnInit, OnChanges {
  @Input() selectedFolder: string;
  @Output() clickedRow: EventEmitter<string> = new EventEmitter<string>();

  displayedColumns: string[] = [
    'format',
    'name',
    'id',
    'created',
    'modified',
    'type',
    'comment',
    'preview',
  ];
  // dataSource = this.setTableData(this.selectedFolder);
  dataSource = new MatTableDataSource<PeriodicElement>(DEFAULT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    /*this.sort.disableClear = true;*/
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor(public dialog: MatDialog, private _liveAnnouncer: LiveAnnouncer) {
  }

  ngOnInit(): void {
  }

  addRow(row: any) {
    this.clickedRows.add(row);
    this.clickedRow.emit(row);
  }

  showPreview() {
    this.dialog.open(PreviewBox, {backdropClass:"back-drop"});
  }

  ngOnChanges(): void {
    this.selectedFolder.length > 0 && this.setTableData(this.selectedFolder);
  }

  setTableData(selectedFolder: string) {
    DATA_COLLECTION.forEach((folder) => {
      if (selectedFolder === folder.folderName) {
        this.dataSource = new MatTableDataSource<PeriodicElement>(folder.data);
        this.dataSource.paginator = this.paginator;

        /*this.sort.disableClear = true;*/
        this.dataSource.sort = this.sort;
      }
      return;
    });
  }

  clickedRows = new Set<PeriodicElement>();

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}

@Component({
  selector: 'preview-box',
  templateUrl: '/preview-box.html',
})

export class PreviewBox {}

