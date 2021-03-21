import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public dashboardMode = true;
  public trainingPlansMode = false;
  public customersMode = false;
  public newTrainingMode = false;
  public trainings: {name:string, description: string, exercises: []}[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  public onOptionSelected(type: string): void {
    if (type === "dashboard") {
      this.dashboardMode = true;
      this.trainingPlansMode = false;
      this.customersMode = false;
      this.newTrainingMode = false;
    } else if (type === "trainingPlans") {
      this.dashboardMode = false;
      this.trainingPlansMode = true;
      this.customersMode = false;
      this.newTrainingMode = false;
    } else if (type === "customers") {
      this.dashboardMode = false;
      this.trainingPlansMode = false;
      this.customersMode = true;
      this.newTrainingMode = false;
    } else if (type === "newTraining") {
      this.dashboardMode = false;
      this.trainingPlansMode = false;
      this.customersMode = false;
      this.newTrainingMode = true;
    }
  }

  public onAddNewTraining(event: any): void{
    if (event) {
      this.onOptionSelected('newTraining');
    }
  }

  public onAddNewTrainingToList(data: any) {
    console.log(data);
    this.trainings.push(data);
    this.onOptionSelected('trainingPlans');
  }
}
