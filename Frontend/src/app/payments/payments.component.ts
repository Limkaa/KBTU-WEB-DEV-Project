import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  plans = [25000,50000,75000,150000,300000];
  paymentAmount!: number;
  paymentPlan: number = 2;
  paymentMethod: number = 1;
  constructor() { }

  ngOnInit(): void {
  	this.paymentAmount = this.plans[this.paymentPlan-1];
  }

  onPaymentPlanChange(event: any){
  	this.paymentPlan = event.target.value;
  	this.paymentAmount = this.plans[this.paymentPlan-1];
  }

  onPaymentMethodChange(event: any){
  	this.paymentMethod = event.target.value;
  }

  paymentProcess() {
  	console.log(this.paymentPlan)
  	console.log(this.paymentMethod)  
  }
}
