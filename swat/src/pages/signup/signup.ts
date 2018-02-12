import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { LoginPage} from '../login/login';

import { NetworkEngineProvider } from '../../providers/network-engine/network-engine';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

 

  text:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public network:NetworkEngineProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  load()
  {
    
  	this.navCtrl.setRoot(LoginPage);
  }

  CreateUser(name,password,email,year)
  {
    this.network.insertUser(name,password,email,year);
    this.navCtrl.pop();
  }

}
