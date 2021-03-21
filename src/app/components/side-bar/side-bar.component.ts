import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  @Output() optionSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  open(type: string): void {
    this.optionSelected.next(type);
  }
}
