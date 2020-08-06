import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {
  public allUser: [];
  public idUser;
  public path;
  constructor(
    private service: UserService,
    private routeParams: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {

    this.path = this.routeParams.snapshot.url[0].path;
    if (this.path == 'deleteUser'){
      this.idUser = this.routeParams.snapshot.paramMap.get('idUser');
      this.removeUser();
    }else{
      this.showAllUsers();
    }
  }

  showAllUsers(){
    console.log("Llego  a la funcion");
    this.service.getAllUsers().subscribe( ( res: any ) => {
      if (res.statusCode == 200) {
        this.allUser = res.allUsers
      }else{

      }
    } )
  }

  removeUser(){
    this.service.removeUser(this.idUser).subscribe( ( res: any ) => {
      if ( res.statusCode == 200) {
        alert(res.message);
        this.router.navigate(['/showAllUsers']);
      } else {
        alert(res.message);
      }
    })
  }
}
