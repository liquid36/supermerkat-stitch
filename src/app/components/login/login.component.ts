import { Component } from '@angular/core';
import { MongoStitch } from '../../services/stitch.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent {
    username = '';
    password = '';
    message = null;
    constructor(private stitch: MongoStitch, private router: Router) { }

    public onClick() {
        this.message = null;
        this.stitch.login(this.username, this.password).then((user) => {
            this.router.navigate(['home']);
        }).catch(err => {
            this.message = 'username o password incorrecto';
            console.log(err);
        });
    }
}
