import {BaseFormElement} from "../base-form-elements";
import {FormFieldTypes} from "../enums/form-field-types";

export type DropDownOptions={
  placeholder:string,
  options:{key:string,value:string}[]
}




export class DropDown extends BaseFormElement<string>{
  override controlType =FormFieldTypes.dropDown;
  constructor(options: BaseFormElement<string>) {
    super(options);
    if(!this.options){

      this.options={placeholder:'please choose one',options:[]} as DropDownOptions

    }
  }
}
