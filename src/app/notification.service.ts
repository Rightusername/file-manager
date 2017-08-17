import { Injectable } from '@angular/core';
import { File } from './File'; 
import { MdSnackBar } from "@angular/material";

@Injectable()
export class NotificationService {


    
    constructor(public snackBar: MdSnackBar){

    }

    show(name, action){
        this.snackBar.open(name, action, {
            duration: 1500,
        });
    }

}
