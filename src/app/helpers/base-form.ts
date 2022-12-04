import {BaseFormElement} from "./base-form-elements";
import {Observable} from "rxjs";
import {ActionTypes} from "./enums/action-types";
import {AccessLevel} from "./enums/access-level";

export interface FormOptions<T>{
  fields:Observable<BaseFormElement<string>[]>;
  actionType:ActionTypes;
  actionAccess:AccessLevel;
  submit:(args?: T) => T;
  beforeSubmit: (args?: T) => T;
  afterSubmit:(args?: T) => T
}

export class BaseForm<T> implements FormOptions<T>{
  fields:Observable<BaseFormElement<string>[]>;
  actionType:ActionTypes;
  actionAccess: AccessLevel;
  submit:(args?: T) => T;
  beforeSubmit: (args?: T) => T;
  afterSubmit:(args?: T) => T;

  constructor(formOptions:FormOptions<T>) {
    this.fields=formOptions.fields||[];
    this.actionAccess=formOptions.actionAccess||AccessLevel.admin;
    this.actionType=formOptions.actionType||ActionTypes.add;
    this.beforeSubmit=formOptions.beforeSubmit;
    this.submit=formOptions.submit;
    this.afterSubmit=formOptions.afterSubmit;
  }







}
