import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {AccessLevel} from "../enums/access-level";

@Injectable()
export class AccessLevelService {

   accessLevel$=new BehaviorSubject<AccessLevel>(AccessLevel.admin);

   constructor() {
     this._initAccessLevel();
   }


   private _initAccessLevel(){
     const localAccessLevel=localStorage.getItem('access_level');
     this.setUserAccess(localAccessLevel==null?AccessLevel.admin:AccessLevel[localAccessLevel as  keyof typeof AccessLevel])

   }

  public setUserAccess(accessLevel:AccessLevel){
    this.accessLevel$.next(accessLevel);
    localStorage.setItem('access_level',accessLevel);

  }


}


