import { Component } from "@angular/core";
import { FilesService } from "../files.service";
import { FormControl, Validators } from "@angular/forms";
import { File } from '../File'; 

@Component({
    selector: 'opened-html',
    templateUrl: './openedhtml.component.html',
    styleUrls: ['./openedhtml.component.less']
})
export class OpenedHtmlComponent {

    edit = new File(this.filesService.openedFile.name, this.filesService.openedFile.content, this.filesService.openedFile.type);
    constructor(private filesService: FilesService){
        
    }

}