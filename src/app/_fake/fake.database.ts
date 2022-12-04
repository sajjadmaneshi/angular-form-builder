import {NgbDate} from "@ng-bootstrap/ng-bootstrap";

export interface DatabaseInterface {
  fullName:string;
  phoneNumber:number;
  isActive:boolean;
  gender:"male"|"female",
  address:string;
  date:NgbDate;
  rangeDate:{fromDate:NgbDate,toDate:NgbDate},
  role:string;
}

export class Database{
  static fakeData:DatabaseInterface={
    address: "shiraz , eastern hakimi st.",
    date: {day:1,year:2022,month:1} as NgbDate,
    fullName: "sajjad maneshi",
    gender: "male",
    isActive: true,
    phoneNumber: 9394241607,
    rangeDate: {fromDate: {day:1,year:2022,month:1}as NgbDate, toDate: {day:1,year:2022,month:2}as NgbDate},
    role: "admin"
  }
}
