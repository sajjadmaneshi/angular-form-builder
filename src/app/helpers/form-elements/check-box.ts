import {BaseFormElement} from "../base-form-elements";
import {FormFieldTypes} from "../enums/form-field-types";
import {TextBox} from "./text-box";




export class CheckBox extends TextBox{
  override controlType =FormFieldTypes.checkBox;

  constructor(options: BaseFormElement<boolean>) {
    super(options);




  }
}
