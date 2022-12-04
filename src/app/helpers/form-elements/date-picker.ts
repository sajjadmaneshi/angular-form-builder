import {BaseFormElement} from "../base-form-elements";
import {FormFieldTypes} from "../enums/form-field-types";
import {NgbDate} from "@ng-bootstrap/ng-bootstrap";





export class DatePicker extends BaseFormElement<any>{
  override controlType =FormFieldTypes.datePicker;
  constructor(options: BaseFormElement<NgbDate>) {
    super(options);
  }
}
