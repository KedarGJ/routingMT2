import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iuser } from 'src/app/shared/model/users';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
userId !: string;
userObj !: Iuser;
  constructor(
    private _routes : ActivatedRoute,
    private _userservice : UsersService,
    private _router : Router
  ) { }

  ngOnInit(): void {
    this._routes.params
    .subscribe(res =>{
      this.userId = res['userId']
      if(this.userId){
        this.userObj = this._userservice.getUserinfo(this.userId)
      }
    })
  }


  onUserRemove(){
    let getConfirm = confirm('Do you want to delete?');
    if(getConfirm){
      this._userservice.removeUser(this.userId)
    }
  }

  gotoEdit()
{
this._router.navigate(['editUser'],{
  relativeTo : this._routes,
  queryParamsHandling:'preserve'
})
}

}