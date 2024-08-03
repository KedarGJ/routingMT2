import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Iuser } from 'src/app/shared/model/users';
import { UsersService } from 'src/app/shared/services/users.service';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  userForm !:FormGroup;
  userId !: string;
  userObj !: Iuser;
  isinEditMode: boolean =false;
  userRole !: "Admin" | "buyer";
  constructor(
    private _uuidservice : UuidService,
    private _userservice:UsersService,
    private _routes : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.createUserForm();
    this.patchUser();
    this.managequryparams()
  }

  managequryparams(){
    this.userRole = this._routes.snapshot.queryParams['userRole'];
    if(this.userRole){
      if(this.userRole==="buyer"){
        this.userForm.disable()
      }else{
        this.userForm.enable()
      }
    }
  }

  createUserForm(){
    this.userForm = new FormGroup({
      userName : new FormControl(null,[Validators.required]),
      userRole : new FormControl(null,[Validators.required])
    })
  }
  onUserAdd(){
    if(this.userForm.valid){
      let newUser: Iuser={...this.userForm.value,userId:this._uuidservice.Uuid()};
      this._userservice.addUser(newUser)
    }
  }

  patchUser(){
    this.userId= this._routes.snapshot.params['userId'];
    if(this.userId){
      this.isinEditMode=true;
      this.userObj= this._userservice.getUserinfo(this.userId);
      this.userForm.patchValue(this.userObj)
    }else{
      this.isinEditMode=false
    }
  }

  onUpdateUser(){
    if(this.userForm.valid){
      let updatedObj={...this.userForm.value,userId:this.userId};
      this._userservice.updateUser(updatedObj)
    }
  }

}
