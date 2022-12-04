import {BaseFormElement} from "../base-form-elements";
import {FormFieldTypes} from "../enums/form-field-types";
import {NgbDate} from "@ng-bootstrap/ng-bootstrap";



export type RangeDatePickerOptions ={
  placeHolder:string
}

export class RangeDatePicker extends BaseFormElement<any>{
  override controlType =FormFieldTypes.rangeDatePicker;
  constructor(options: BaseFormElement<{fromDate:NgbDate|null,toDate:NgbDate|null}>) {
    super(options);
    if(!this.options){
      this.options={
        placeHolder:"please choose date",
      } as RangeDatePickerOptions
    }
  }
}
