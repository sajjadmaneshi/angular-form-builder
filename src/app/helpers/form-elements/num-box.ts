import {BaseFormElement} from "../base-form-elements";
import {FormFieldTypes} from "../enums/form-field-types";
import {TextBox} from "./text-box";




export class NumBox extends TextBox{
  override controlType =FormFieldTypes.numBox;

  constructor(options: BaseFormElement<any>) {
    super(options);

  }
}
