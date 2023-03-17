import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'back-to-main',
  templateUrl: './back-to-main.component.html',
  styleUrls: ['./back-to-main.component.css']
})
export class BackToMainComponent {
    

    @Input('redirect') redirect: string = '';
    @Input('text') text : string = '';
    
    constructor(private router : Router) {

    }

    ngOnInit(): void {

    }

    onclick(){
        this.router.navigate([this.redirect]);
    }
}
