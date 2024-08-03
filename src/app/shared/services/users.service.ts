import { Injectable } from '@angular/core';
import { Iuser } from '../model/users';
import { Router } from '@angular/router';
import { SnackBarService } from './snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
userArr : Array<Iuser>=[
  {
    userName:'Om',
    userId:'11',
    userRole:'Admin'
  },
  {
    userName:'jay',
    userId:'12',
    userRole:'buyer'
  },
  {
    userName:'hari',
    userId:'13',
    userRole:'Admin'
  },
]
  constructor(
    private _router :Router,
    private _snackBar : SnackBarService
  ) { }
  fetchAllusers(){
    return this.userArr;
  }

  getUserinfo(id:string){
    return this.userArr.find(user=> user.userId === id) as Iuser
  }

  addUser(user: Iuser){
    this.userArr.push(user)
    this._router.navigate(['/users']);
    this._snackBar.openSnackBar(`user ${user.userName} is added`)
  }

  updateUser(updatedUserObj:Iuser){
    let getIndex = this.userArr.findIndex(user =>user.userId === updatedUserObj.userId);
    this.userArr[getIndex] = updatedUserObj;
    this._router.navigate(['/users']);
    this._snackBar.openSnackBar(`user ${updatedUserObj.userName} is updated`)
}

removeUser(userId:string){
  let getIndex = this.userArr.findIndex(user=>user.userId===userId);
  let removeUser = this.userArr[getIndex]
  this.userArr.splice(getIndex,1);
  this._router.navigate(['/users']);
  this._snackBar.openSnackBar(`User ${removeUser.userName} is removed`)
}
}