import {Component, OnInit, Inject, Input} from '@angular/core';

@Component({
  selector: 'app-preview-box',
  templateUrl: './preview-box.component.html',
  styleUrls: ['./preview-box.component.css']
})
export class PreviewBoxComponent implements OnInit {
  @Input() selectedFolder: string;
  @Input() selectedRow: string;

  constructor() {}

  ngOnInit(): void {
  }

}
