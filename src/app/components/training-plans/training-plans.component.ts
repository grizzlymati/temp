import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-training-plans',
  templateUrl: './training-plans.component.html',
  styleUrls: ['./training-plans.component.scss']
})
export class TrainingPlansComponent implements OnInit {

  @Output() addNewTraining = new EventEmitter<boolean>();
  @Input() trainings: any = [];

  public isTrainingOpen: boolean = false;
  public exercises: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  public openTraining(): void {
    this.isTrainingOpen = true;
    this.exercises = [];
  }

  public addTrainingTemplate(): void {
    this.addNewTraining.next(true);
  }

  public addTab(): void {

  }

  public openCustomTraining(excersises: any):void {
    console.log(excersises);
    this.exercises = excersises;
    this.isTrainingOpen = true;
  }
}
