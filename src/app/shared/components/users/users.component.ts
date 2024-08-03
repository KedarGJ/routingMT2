import { Component, OnInit } from '@angular/core';
import { Iuser } from '../../model/users';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  userData !: Array<Iuser>;
  userId !: string
  constructor(
    private _userservice : UsersService,
    private _route : ActivatedRoute,
    private _router : Router
  ) { }

  ngOnInit(): void {

    this.userData = this._userservice.fetchAllusers();
    this._router.navigate(['users',this.userData[0].userId],{
      queryParams:{userRole:this.userData[0].userRole},
      queryParamsHandling:'merge'
    })
  }

}
