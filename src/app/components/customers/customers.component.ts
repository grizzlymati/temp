import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  public selectedCustomer: string = '';
  public trainingSelected: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public showCustomerTrainings(customerId: string): void {
    this.selectedCustomer = customerId;
    this.trainingSelected = false;
  }

  public openTraining(): void {
    this.trainingSelected = true;
  }

  public addNewTraining(): void {

  }
}
