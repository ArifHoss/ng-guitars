import {Component, Input, OnInit} from '@angular/core';
import {Guitar} from "../../models/guiter.model";

@Component({
  selector: 'app-guitar-list',
  templateUrl: './guitar-list.component.html',
  styleUrls: ['./guitar-list.component.css']
})
export class GuitarListComponent implements OnInit {
  @Input() guitars: Guitar[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }
}
