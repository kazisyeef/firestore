import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';                          //add import sta
import { AngularFirestoreModule } from 'angularfire2/firestore';           //add import sta
import {FormsModule} from '@angular/forms';


 var firebaseConfig = {                                                    //Add firebase config of firestore
  apiKey: "AIzaSyBUOIpGdk4ImlmExaqHdwFz8I4XXHAOoJ0",
  authDomain: "firestore-3ad56.firebaseapp.com",
  databaseURL: "https://firestore-3ad56.firebaseio.com",
  projectId: "firestore-3ad56",
  storageBucket: "",
  messagingSenderId: "846859696517"
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),                  //Add This
    AngularFirestoreModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
