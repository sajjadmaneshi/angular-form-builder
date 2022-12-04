import {AccessLevel} from "./enums/access-level";


export interface FormElementOptions<T>{
  key:string;
  label:string;
  description?:string;
  required:boolean;
  value?:T;
  order:number;
  options?:any,
  pattern?:string|RegExp|undefined;
  displayFormat?:string;
  accessLevel:AccessLevel;
  disabled:boolean;
  controlType?: string;
}

export class BaseFormElement<T> implements FormElementOptions<T>{
  key: string;
  label: string;
  description: string|undefined;
  required: boolean;
  order:number;
  value?: T|undefined;
  options?: any;
  pattern?: string|RegExp|undefined;
  displayFormat?: string;
  accessLevel: AccessLevel;
  disabled:boolean;
  controlType?: string;

  constructor(options:FormElementOptions<T>) {
    this.key=options.key||'';
    this.label=options.label||'';
    this.description=options.description||'';
    this.required=options.required;
    this.value=options.value;
    this.order = options.order === undefined ? 1 : options.order;
    this.options=options.options||undefined;
    this.pattern=options.pattern||undefined;
    this.displayFormat=options.displayFormat||undefined;
    this.accessLevel=options.accessLevel?options.accessLevel:AccessLevel.admin;
    this.controlType=options.controlType||'';
    this.disabled=options.disabled||false;

  }
}
