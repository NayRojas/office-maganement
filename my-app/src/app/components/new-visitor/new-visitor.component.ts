import { Component } from '@angular/core';
import { FirebaseServiceService } from '../../services/firebase-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-visitor',
  templateUrl: './new-visitor.component.html',
  styleUrls: ['./new-visitor.component.css']
})
export class NewVisitorComponent {
  onSubmit(f: NgForm) {
    f.resetForm();
  }

  cantidadDvisitantes = 0;
  constructor(public firestore: FirebaseServiceService) { }

  getVisitorManual(name, email, companyVisitador, comunero, comuneroVisitador){
    this.firestore.addVisitors(name, email, companyVisitador, comunero, comuneroVisitador)
  }
 
  sumarCantidad(){
    this.cantidadDvisitantes += 1;
  }
  restarCantidad(){
    this.cantidadDvisitantes -= 1;
  }

}
