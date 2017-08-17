import { Component } from "@angular/core";
import { FilesService } from "../files.service";
import { File } from '../File'; 

@Component({
    selector: 'opened-image',
    templateUrl: './openedimage.component.html',
    styleUrls: ['./openedimage.component.less']
})
export class OpenedImageComponent {


    edit = new File(this.filesService.openedFile.name, this.filesService.openedFile.content, this.filesService.openedFile.type);
    image = new Image();

    constructor(private filesService: FilesService){

    }


}