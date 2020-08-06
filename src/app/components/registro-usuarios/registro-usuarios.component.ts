import { Component, OnInit } from '@angular/core';
import { User } from '../../models/users'; 
import { UserService } from '../../service/user.service';

 

@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.component.html',
  styleUrls: ['./registro-usuarios.component.css']
})
export class RegistroUsuariosComponent implements OnInit {

  public user : User;

  constructor(
    private service: UserService,
  ) { 
    this.user =new User();
  }

  ngOnInit(): void {
  }

  registroUsuarios(){
    this.service.registerUser(this.user).subscribe( ( res: any ) => {
      if(res.statusCode == 200){
        alert(res.message);
      }else{
        alert("Error al insertar el usuario");
      }
    } )
  }
}
