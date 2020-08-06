import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service'; 
import { User } from '../../models/users';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-users',
  templateUrl: './update-users.component.html',
  styleUrls: ['./update-users.component.css']
})
export class UpdateUsersComponent implements OnInit {
  public user: User;
  public idUser;
  constructor(
    private service: UserService,
    private routeParams: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.idUser = this.routeParams.snapshot.paramMap.get('idUser');
    this.getDataUser();
  }

  
  updateUser(){
    this.service.updateUser(this.user).subscribe( (res: any) => {
      if (res.statusCode == 200){
        this.user = res.dataUser
        alert(res.message);
        this.router.navigate(['/showAllUsers']);
      } else {
        alert(res.message)
      }
    })
  }

  getDataUser(){
    this.service.getUser(this.idUser).subscribe( (res: any) => {
      this.user = res.dataUser
    } ) 
  }

}


