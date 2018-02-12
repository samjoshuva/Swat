import { HttpClient ,HttpHeaders,HttpParams, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions ,URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';

import {  ToastController } from 'ionic-angular';
/*
  Generated class for the NetworkEngineProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NetworkEngineProvider {

  constructor(public http: Http,public toastCtrl  : ToastController) {
    console.log('Hello NetworkEngineProvider Provider');
  }


  insertUser(name,pass,email,year)
  {
  	let URI = "https://figurable-jack.000webhostapp.com/php/swat/";

    let headers   : any    = new HttpHeaders({ 'Content-Type': 'application/json' }),
          options   : any    = { "key" : "create", "name" : name, "password" : pass, "email" : email, "year" : year },
          url       : any        = URI+ "connection.php";

      this.http.post(url, JSON.stringify(options), headers)
      .subscribe((data : any) =>
      {
         // If the request was successful notify the user
         
         this.sendSucessNotification(`your account has ben created: ${name}`);
      },
      (error : any) =>
      {
         this.sendFailureNotification('Something went wrong!');
      });

  }

  login()
  {
    let URI = "https://figurable-jack.000webhostapp.com/php/swat/user_login.php";
    let params = new HttpParams();
    
    console.log(URI);
    return this.http.get(URI,{params:params}).map((res) => res.json());
  }



  sendSucessNotification(message : string)  : void
   {
      let notification = this.toastCtrl.create({
          message       : message,
          duration      : 3000,
          dismissOnPageChange: true,
          cssClass: "sucess_notification",
      });
      notification.present();
   }

   sendFailureNotification(message : string)  : void
   {
      let notification = this.toastCtrl.create({
          message       : message,
          duration      : 3000,
          showCloseButton: true,
          closeButtonText: 'Got it!',
          dismissOnPageChange: true,
          cssClass: "yourCssClassName",
      });
      notification.present();
   }

}
