import { Component } from '@angular/core';
import { FilesService } from "../files.service";
import { MdDialog, MdDialogModule } from "@angular/material";
import { CreateFileComponent } from "../createFile/createfile.component";


@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.less']
})
export class NavbarComponent {

    constructor( public filesService : FilesService, public dialog: MdDialog){
        
    }

    openDialog() {
        this.dialog.open(CreateFileComponent);
    }

}
