import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { SignupPage} from '../signup/signup';
import { TabsPage } from '../tabs/tabs';

import { NetworkEngineProvider } from '../../providers/network-engine/network-engine';



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  name:string;
  password:string;

  isLoggingin:boolean = false;

  constructor(public navCtrl: NavController,
   public navParams: NavParams,
   public net:NetworkEngineProvider
    ) {
  }
  Allusers:any[];

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.net.login().subscribe(data=>
      {
        this.Allusers = data;
        console.log(this.Allusers);
      });
  }

  signup()
  {
  	this.navCtrl.push(SignupPage);
  }

  login()
  {
    var i = null;
    for(i=0; this.Allusers.length>i; i++)
    {
      if(this.Allusers[i].name === this.name && this.Allusers[i].password === this.password){
        
        this.isLoggingin = true;
      }
      
    }

    if(this.isLoggingin == true)
    {
      this.net.sendSucessNotification("logging you in");
      this.navCtrl.setRoot(TabsPage);
    }
    else{
      this.net.sendFailureNotification("Failed");
    }  	
  }
}
