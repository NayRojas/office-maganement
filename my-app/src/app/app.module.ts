import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment.prod';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { VisitorTableComponent } from './components/visitor-table/visitor-table.component';
import { MenuComponent } from './components/menu/menu.component';
import { NewVisitorComponent } from './components/new-visitor/new-visitor.component';
import { FilterPipe } from './pipes/filter.pipe';
import { LoginComponent } from './components/login/login.component';
import { FirebaseServiceService } from './services/firebase-service.service';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { FormsModule } from '@angular/forms';
import { InvitationsComponent } from './components/invitations/invitations.component';

@NgModule({
  declarations: [
    AppComponent,
    VisitorTableComponent,
    MenuComponent,
    NewVisitorComponent,
    FilterPipe,
    LoginComponent,
    InvitationsComponent
  ],
  
  imports: [
    BrowserModule,
    AngularFireAuthModule,
    AppRoutingModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule
  ],
  providers: [FirebaseServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
