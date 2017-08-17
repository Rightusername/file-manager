import { Component } from "@angular/core";
import { FilesService } from "../files.service";
import { FormControl, Validators } from "@angular/forms";
import { File } from '../File'; 
import { NotificationService } from "../notification.service";

@Component({
    selector: 'rename-dialog',
    templateUrl: './renamedialog.component.html',
    styleUrls: ['./renamedialog.component.less']
})
export class RenameDialogComponent {

    nameFormControl = new FormControl('', [ Validators.required ] );
    edit = new File(this.filesService.openedFile.name, this.filesService.openedFile.content, this.filesService.openedFile.type);
    image = new Image();

    constructor( private filesService: FilesService, private notification: NotificationService ){
        console.log(this.image.src , this.edit.content);
    }

    editFile(){
        this.filesService.files[this.filesService.files.indexOf(this.filesService.openedFile)].name = this.edit.name;
        this.filesService.saveFiles();
        this.notification.show(this.edit.name, 'Переименован');
    }

}