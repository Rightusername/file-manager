import { Component } from "@angular/core";
import { FilesService } from "../files.service";
import { FormControl, Validators } from "@angular/forms";
import { File } from '../File'; 

@Component({
    selector: 'opened-file',
    templateUrl: './openedfile.component.html',
    styleUrls: ['./openedfile.component.less']
})
export class OpenedFileComponent {
    nameFormControl = new FormControl('', [ Validators.required ] );
    edit = new File(this.filesService.openedFile.name, this.filesService.openedFile.content, this.filesService.openedFile.type);
    constructor(private filesService: FilesService){

    }

    editFile(){
        this.filesService.files[this.filesService.files.indexOf(this.filesService.openedFile)].name = this.edit.name;
        this.filesService.files[this.filesService.files.indexOf(this.filesService.openedFile)].content = this.edit.content;
        this.filesService.saveFiles();
    }

}