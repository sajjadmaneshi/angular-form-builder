import {Component, forwardRef, OnInit} from '@angular/core';
import {NgbCalendar, NgbDate, NgbDateParserFormatter, NgbDatepickerModule} from "@ng-bootstrap/ng-bootstrap";
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR} from "@angular/forms";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-date-picker-range',
  standalone: true,
  imports: [NgbDatepickerModule, FormsModule, JsonPipe],
  templateUrl: './date-picker-range.component.html',
  styleUrls: ['./date-picker-range.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatePickerRangeComponent),
      multi: true,
    },
  ],
})
export class DatePickerRangeComponent implements OnInit,ControlValueAccessor{
  hoveredDate: NgbDate | null = null;

  fromDate: NgbDate| null=null;
  toDate: NgbDate | null = null;



  onChange: any = () => {};
  onTouched: any = () => {};

  constructor(private _calendar: NgbCalendar, public formatter: NgbDateParserFormatter) {

  }

  ngOnInit() {
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
    this.writeValue({fromDate:this.fromDate,toDate:this.toDate})
  }

  isHovered(date: NgbDate) {
    return (
      this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate)
    );
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return (
      date.equals(this.fromDate) ||
      (this.toDate && date.equals(this.toDate)) ||
      this.isInside(date) ||
      this.isHovered(date)
    );
  }
  validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
    const parsed = this.formatter.parse(input);
    return parsed && this._calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: {fromDate:NgbDate|null,toDate:NgbDate|null}): void {
    this.fromDate=value?.fromDate;
    this.toDate=value?.toDate
    this.onChange({fromDate:this.fromDate,toDate:this.toDate});
  }
}
