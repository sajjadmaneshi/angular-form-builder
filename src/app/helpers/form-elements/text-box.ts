import {BaseFormElement} from "../base-form-elements";
import {FormFieldTypes} from "../enums/form-field-types";

export type TextBoxOption={
  placeholder?:string
}


export class TextBox extends BaseFormElement<any>{
  override controlType =FormFieldTypes.textBox;

  constructor(options: BaseFormElement<string|boolean>) {
    super(options);



    if(!this.options) {
      this.options ={placeholder:'Write ' + options.label}
    }
  }
}
