
import { Component } from "@angular/core";
import { FilesService } from "../files.service";
import { FormControl, Validators } from "@angular/forms";
import { MdSnackBar } from "@angular/material";
import { NotificationService } from "../notification.service";

@Component({
    selector: 'create-file',
    templateUrl: './CreateFile.component.html',
    styleUrls: ['./CreateFile.component.less']
})



export class CreateFileComponent {
    fileName;
    content;
    selectedType = 'image';
    test;
    types = ['html', 'image', 'txt'];
    nameFormControl = new FormControl('', [ Validators.required ] );

    constructor(private filesService: FilesService, private notification: NotificationService){

    }
    
    addFile(){
        this.filesService.addFile(this.fileName, this.content, this.selectedType);
        this.filesService.saveFiles();
        this.notification.show(this.fileName, 'Создан');
    }

    fileLoad($event){
        console.log(this.test);
        $event.file 
        this.content = $event.src;
        this.fileName = $event.file.name;
    }

    

}