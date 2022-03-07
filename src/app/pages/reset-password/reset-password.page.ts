import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {

  email: string;

  constructor(private authService: AuthService, private router: Router, private alertController: AlertController,) { }

  ngOnInit() {

  }

  resetPassword(){

    this.authService.resetPassword(this.email)
      .then(
        () => {
          this.alertResetPassword();
          this.router.navigateByUrl('/login');
        }
        ).catch(
        () => this.alertError()

      );


  }

  async alertResetPassword() {
    const alert = await this.alertController.create({
      header: 'Recuperación de contraseña',
      message: 'Se le ha enviado un correo',
      buttons: ['Aceptar']
    });

    await alert.present();

}

async alertError() {
  const alert = await this.alertController.create({
    header: 'Recuperación de contraseña',
    message: 'No se ha podido enviar el correo para restablecer la contraseña',
    buttons: ['Aceptar']
  });

  await alert.present();

}
}
