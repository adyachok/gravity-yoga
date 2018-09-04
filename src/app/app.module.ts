import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { SelectionComponent } from './selection/selection.component';
import { ReportComponent } from './report/report.component';
import {TrainingService} from './services/training.service';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatIconModule, MatSelectModule, MatStepperModule,
  MatTableModule, MatInputModule, MatSnackBarModule
} from '@angular/material';
import {DiscountsService} from './services/discounts.service';
import { TrainingSelectionComponent } from './training-selection/training-selection.component';
import {CalculationService} from './services/calculation.service';
import { DetailsDialogComponent } from './details-dialog/details-dialog.component';
import { DiscountsDialogComponent } from './discounts-dialog/discounts-dialog.component';
import { SubmitComponent } from './submit/submit.component';
import {HttpClientModule} from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import {environment} from '../environments/environment.prod';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireDatabaseModule} from 'angularfire2/database';



@NgModule({
  declarations: [
    AppComponent,
    SelectionComponent,
    ReportComponent,
    TrainingSelectionComponent,
    DetailsDialogComponent,
    DiscountsDialogComponent,
    SubmitComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    MatStepperModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    MatSnackBarModule
  ],
  providers: [
    TrainingService,
    DiscountsService,
    CalculationService
  ],
  bootstrap: [AppComponent],
  entryComponents: [DetailsDialogComponent, DiscountsDialogComponent]
})
export class AppModule { }
