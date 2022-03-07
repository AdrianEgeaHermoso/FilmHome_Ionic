import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, User, getAuth, signOut, createUserWithEmailAndPassword, sendPasswordResetEmail} from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  

  constructor(private auth: Auth) { }

  login(email: string, password: string) : Promise<boolean>{
    return signInWithEmailAndPassword(this.auth, email, password)
    .then(
      data => { 
        return true;
      },
      error =>{
        console.error(error);
        return false;
      }
    )
    ;
  }

  getCurrentUser() : User{
    return getAuth().currentUser;
  }

  logout(){
    signOut(this.auth)
  }

  register(email: string, password: string) : Promise<boolean>{

    return createUserWithEmailAndPassword(this.auth, email, password)

    .then(
      () => true,
      error =>{
        console.error(error);
        return false;
      }
    )
    ;

  }


  resetPassword(email: string) : Promise<void>{

    return sendPasswordResetEmail(this.auth, email);

  }
}
