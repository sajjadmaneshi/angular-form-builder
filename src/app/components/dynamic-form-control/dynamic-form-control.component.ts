import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {BaseFormElement} from "../../helpers/base-form-elements";
import {FormFieldTypes} from "../../helpers/enums/form-field-types";


@Component({
  selector: 'app-dynamic-form-control',
  templateUrl: './dynamic-form-control.component.html',
  styleUrls: ['./dynamic-form-control.component.scss'],

})
export class DynamicFormControlComponent  implements OnInit{

  @Input() controller!:BaseFormElement<string>;
  @Input() form!:FormGroup;

  formFieldType=FormFieldTypes;

  rangeDatePickerController!:FormControl;



  get isValid(){
    return this.form.controls[this.controller.key].valid;
  }


  test(event:any) {
    console.log(event)
  }

  ngOnInit(): void {
    if(this.controller.controlType==FormFieldTypes.rangeDatePicker){
      this.rangeDatePickerController=this.form.controls[this.controller.key] as FormControl;
    }

  }
}
