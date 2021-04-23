import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service'
import {AppComponent} from '../app.component'

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  plans = [25000,50000,75000,150000,300000];
  methods = ['Visa/Mastercard','PayPal','Qiwi']
  paymentAmount!: number;
  paymentPlan: number = 2;
  paymentMethod: number = 1;

  constructor(private apiService: ApiService, 
              private appComponent: AppComponent,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
      if (!this.appComponent.logged) {
        this.router.navigateByUrl('login');
      } else {
        this.paymentAmount = this.plans[this.paymentPlan-1];
      }
    }

  onPaymentPlanChange(event: any){
  	this.paymentPlan = event.target.value;
  	this.paymentAmount = this.plans[this.paymentPlan-1];
  }

  onPaymentMethodChange(event: any){
  	this.paymentMethod = event.target.value;
  }

  paymentProcess() {
  	this.apiService.extendSubscription(this.plans[this.paymentPlan], this.methods[this.paymentMethod]).subscribe((data) => {
      if (data.message == 'Successful payment') {
        this.router.navigateByUrl('account');
      } else {
        alert('Something went wrong! Please try again or connect with tech support!')
      }
    });
  }
}
