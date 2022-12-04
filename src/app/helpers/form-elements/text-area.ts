import {BaseFormElement} from "../base-form-elements";
import {TextBox} from "./text-box";
import {FormFieldTypes} from "../enums/form-field-types";




export class TextArea extends TextBox{
  override controlType =FormFieldTypes.textArea;
  constructor(options: BaseFormElement<string>) {
    super(options);
  }
}
