import {Injectable} from "@angular/core";
import {BaseFormElement} from "../base-form-elements";
import {TextBox} from "../form-elements/text-box";
import {NumBox} from "../form-elements/num-box";
import {Observable, of} from "rxjs";
import {CheckBox} from "../form-elements/check-box";
import {RadioButton, RadioButtonOptions} from "../form-elements/radio-button";
import {DatePicker} from "../form-elements/date-picker";
import {BaseForm} from "../base-form";
import {DropDown, DropDownOptions} from "../form-elements/drop-down";
import {RangeDatePicker, RangeDatePickerOptions} from "../form-elements/range-date-picker";
import {NgbCalendar} from "@ng-bootstrap/ng-bootstrap";

import {TextArea} from "../form-elements/text-area";
import {Database} from "../../_fake/fake.database";
import {AccessLevel} from "../enums/access-level";
import {ActionTypes} from "../enums/action-types";
import {AccessLevelService} from "./access-level.service";


@Injectable()
export class FormBuilderService {
  actionType=ActionTypes.add;
  actionAccess=AccessLevel.admin;
  accessLevel!:AccessLevel;
  constructor(private _calendar: NgbCalendar,private _accessLevelService:AccessLevelService) {
    this._accessLevelService.accessLevel$.subscribe(accessLevel=>this.accessLevel=accessLevel)
  }

  getForm(): Observable<BaseForm<any>> {
    const formData: BaseForm<any> = new BaseForm<any>({
      fields: this._generateFormFields(this.actionType),
      afterSubmit: () => {
        alert('after submit click')
      },
      beforeSubmit: () => {
        alert('before submit click')
      },
      submit:()=>{
        alert('submit')
      },
      actionType: this.actionType,
      actionAccess:this.actionAccess
    })
    return of(formData);
  }


  private _generateFormFields(action:ActionTypes) {
    const formFields: BaseFormElement<string>[] = [
      new TextBox( {
        accessLevel: AccessLevel.primary_user,
        key: 'test_text_box',
        label: 'full name',
        description: 'full name textbox',
        displayFormat: "",
        required: true,
        order: 1,
        value:this._setValue(action,Database.fakeData.fullName),
        disabled:(action===ActionTypes.view||this.accessLevel!=AccessLevel.primary_user)
      }),
      new NumBox({
        key: 'test_num_box',
        label: 'phone number',
        description: 'phone Number',
        displayFormat: "",
        pattern: "^((\\\\+91-?)|0)?[0-9]{10}$",
        required: true,
        accessLevel:AccessLevel.admin,
        value:this._setValue(action,Database.fakeData.phoneNumber),
        order: 2,
        disabled:(action===ActionTypes.view||this.accessLevel!=AccessLevel.admin)
      }),
      new TextArea({
        key: 'address_text_area',
        label: 'address',
        description: 'address',
        required: true,
        accessLevel:AccessLevel.primary_user,
        value:this._setValue(action,Database.fakeData.address),
        order: 2,
        disabled:(action===ActionTypes.view||this.accessLevel!=AccessLevel.primary_user)
      }),

      new CheckBox({
        key: 'test_check_box',
        label: 'active',
        description: 'active checkbox',
        displayFormat: "",
        pattern: "",
        required: true,
        accessLevel:AccessLevel.admin,
        value:this._setValue(action,Database.fakeData.isActive),
        order: 3,
        disabled:(action===ActionTypes.view||this.accessLevel!=AccessLevel.admin)
      }),


      new RadioButton({
        key: 'test_radio_button',
        label: 'gender',
        description: 'gender',
        required: true,
        value:this._setValue(action,Database.fakeData.gender),
        accessLevel:AccessLevel.primary_user,
        options: {
          elements: ['male', 'female'],
        } as RadioButtonOptions,
        order: 4,
        disabled:(action===ActionTypes.view||this.accessLevel!=AccessLevel.primary_user)
      }),
      new DropDown({
        key: 'test_drop_down',
        label: 'list selector',
        description: 'list selector',
        displayFormat: "",
        required: true,
        accessLevel:AccessLevel.primary_user,
        options: {
          placeholder: 'please choose one',
          options: [{key: 'admin', value: 'admin'}, {key: 'primary_user', value: 'primary_user'}]
        } as DropDownOptions,
        value:this._setValue(action,Database.fakeData.role),
        order: 5,
        disabled:(action===ActionTypes.view||this.accessLevel!=AccessLevel.primary_user)
      }),
      new DatePicker({
        key: 'test_Date_picker',
        label: 'single date picker',
        description: 'single date picker',
        accessLevel:AccessLevel.admin,
        required: true,
        value:this._setValue(action,Database.fakeData.date),
        order: 6,
        disabled:(action===ActionTypes.view||this.accessLevel!=AccessLevel.admin)
      }),
      new RangeDatePicker({
        key: 'test_range_date_picker',
        label: 'range date picker',
        description: 'range date picker',
        displayFormat: "",
        accessLevel:AccessLevel.primary_user,
        required: true,
        value:this._setValue(action,Database.fakeData.rangeDate),

        options: {
          placeHolder: 'choose one Date'
        } as RangeDatePickerOptions,
        order: 7,
        disabled:(action===ActionTypes.view||this.accessLevel!=AccessLevel.primary_user)
      }),
    ];

    return of(formFields.sort((a: BaseFormElement<string>, b: BaseFormElement<string>) => a.order - b.order))

  }

  private _setValue(action:ActionTypes,value:any){
if(action===ActionTypes.view||action===ActionTypes.edit){
  return value;
}
return undefined



  }

}
