import { Component, OnInit } from '@angular/core';
import { Account } from '../models'
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service'
import {AppComponent} from '../app.component'

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {
  loaded: boolean = false;
  new_wish = '';

  // Just for example 
  account: Account = {
  	id: 1, 
  	name: 'Alim Khamrayev', 
  	email: 'demo@gmail.com', 
  	phone: '+75558885588', 
  	address: 'Almaty city', 
  	subscription: 32, 
  	wishes: ['Fish', 'Meat']
  }

  wishes = this.account.wishes;

  constructor(private apiService: ApiService, 
        private appComponent: AppComponent,
        private router: Router,
          private route: ActivatedRoute) { }

  ngOnInit() {
      if (!this.appComponent.logged) {
        this.router.navigateByUrl('login');
      } else {
        this.getAccount()
      }
    }

  getAccount() {
    this.apiService.getAccount().subscribe((data) => {
      if (data) {
        this.account = data
        this.loaded = true;
      } else {
        this.appComponent.logged = false
        localStorage.removeItem('')
      }
    });
    this.loaded = true;
  }

  add_wish() {
    if (this.new_wish != '') {
      this.account.wishes.push(this.new_wish)
      this.new_wish = ''
    }
  }

  change_wish(index: number, event: any) {
    this.account.wishes[index] = event.target.value;
  }

  delete_wish(index: number) {
    this.account.wishes.splice(index, 1)
    console.log(this.account.wishes)
  }

  save_changes() {
    console.log(this.account.wishes)
    this.apiService.saveAccountChanges(this.wishes).subscribe((data) => {
      if (data.message = "Changes successfully saved") {
        this.getAccount()
      } else {
        this.appComponent.logged = false
        localStorage.removeItem('token')
      }
    });
  }

}
