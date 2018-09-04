import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CalculationService} from '../services/calculation.service';
import {HttpErrorResponse} from '@angular/common/http';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';
import {AngularFireDatabase} from 'angularfire2/database';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {
  name: string;
  fGroup: FormGroup;

  constructor(private fb: FormBuilder, private calculationService: CalculationService, private af: AngularFireDatabase,
              private snackBar: MatSnackBar) {
    this.fGroup = fb.group({
      'name': [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      'familyName': [null],
      'email': [null, Validators.email],
      'phone': [null,  Validators.compose([Validators.pattern('[0-9]+'), Validators.required])]
    });
  }

  ngOnInit() {
  }

  onSubmit(data) {
    const listRef = this.af.list('gravity');
    data.trainings = this.calculationService.getAll();
    listRef.push(data);
    this.fGroup.reset();
    this.snackBar.open('Ваше сообщение отправленно', 'Close', {duration: 5000});
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an ErrorObservable with a user-facing error message
    return new ErrorObservable(
      'Something bad happened; please try again later.');
  }

}
