import {BaseFormElement} from "../base-form-elements";
import {FormFieldTypes} from "../enums/form-field-types";
import {TextBox} from "./text-box";

export type RadioButtonOptions={
  elements:any[]
}


export class RadioButton extends TextBox{
  override controlType =FormFieldTypes.radioButton;

  constructor(options: BaseFormElement<string>) {
    super(options);
    if(!this.options){
      this.options=[];
    }
  }

}
