import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import {DATA_COLLECTION, DEFAULT_DATA, PeriodicElement} from 'src/app/helpers/data';

@Component({
  selector: 'app-explorer-table',
  templateUrl: './explorer-table.component.html',
  styleUrls: ['./explorer-table.component.css'],
})
export class ExplorerTableComponent implements OnInit, OnChanges{
  @Input() selectedFolder!: string;

/*  @ViewChild(MatPaginator)
  paginator: MatPaginator;*/

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
  dataSource = DEFAULT_DATA;


  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.selectedFolder.length > 0 && this.setTableData(this.selectedFolder);
  }

  setTableData(selectedFolder: string) {
    DATA_COLLECTION.forEach((folder) => {
      if (selectedFolder === folder.folderName) {
        this.dataSource = folder.data;
      }
      return;
    });
  }

  clickedRows = new Set<PeriodicElement>();

}
