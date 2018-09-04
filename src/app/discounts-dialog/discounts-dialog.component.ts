import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatTableDataSource} from '@angular/material';
import {DiscountsService} from '../services/discounts.service';
import {DiscountOptionModel} from '../models/discount-option.model';

@Component({
  selector: 'app-discounts-dialog',
  templateUrl: './discounts-dialog.component.html',
  styleUrls: ['./discounts-dialog.component.css']
})
export class DiscountsDialogComponent {
  dataSourceFrequency: MatTableDataSource<DiscountOptionModel>;
  dataSourceDuration: MatTableDataSource<DiscountOptionModel>;

  constructor(
    private discountsService: DiscountsService,
    public dialogRef: MatDialogRef<DiscountsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    const frequencyDiscountOptions = discountsService.getFrequencyDiscount().getOptions();
    const durationDiscountOptions = discountsService.getDurationDiscount().getOptions();
    this.dataSourceFrequency = new MatTableDataSource<DiscountOptionModel>(frequencyDiscountOptions);
    this.dataSourceDuration = new MatTableDataSource<DiscountOptionModel>(durationDiscountOptions);
  }

  close(): void {
    this.dialogRef.close();
  }
}
