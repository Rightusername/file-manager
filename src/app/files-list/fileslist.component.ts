import { Component, ViewChild } from "@angular/core";
import { FilesService } from "../files.service";
import { Sort, MdDialog } from "@angular/material";
import { OpenedFileComponent } from "../openedFile/openedfile.component";
import { OpenedImageComponent } from "../openedImage/openedimage.component";
import { RenameDialogComponent } from "../renamedialog/renamedialog.component";
import * as FileSaver from 'file-saver';
import { OpenedHtmlComponent } from "../openedHtml/openedhtml.component";
import { NotificationService } from "../notification.service";


@Component({
    selector: 'files-list',
    templateUrl: './fileslist.component.html',
    styleUrls: ['./fileslist.component.less']
})
export class FilesListComponent {
    sortedData;
    sidenav;

    constructor(private filesService: FilesService, public dialog: MdDialog, private notification: NotificationService){
        this.sortedData = filesService.files;
    }

    

    downloadFile(file){
        var blob = new Blob([file.content], {type: "text/plain;charset=utf-8"});
        console.log(file.content);
        FileSaver.saveAs(blob, file.name);
        this.notification.show(file.name, 'Скачивается');
    }


    openDialogRename(file){
        this.filesService.openedFile = file;
        this.dialog.open( RenameDialogComponent );
    }

    openDialogOpenFile(file) {
        this.filesService.openedFile = file;
        switch(file.type){
            case 'image':
                this.dialog.open( OpenedImageComponent );
                break;
            case 'html':
                this.dialog.open( OpenedHtmlComponent );
                break;
            default:
                this.dialog.open( OpenedFileComponent );
                break;

        }
    }

    openDialogEditFile(file){
        this.filesService.openedFile = file;
        switch(file.type){
            case 'html':
                this.dialog.open( OpenedFileComponent );
                break;
        }
    }

    compare(a, b, isAsc) {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }

    sortData(sort: Sort) {
        const data = this.filesService.files.slice();
        if (!sort.active || sort.direction == '') {
            this.sortedData = data;
            return;
        }

        this.sortedData = data.sort((a, b) => {
            let isAsc = sort.direction == 'asc';
            switch (sort.active) {
                case 'name': return this.compare(a.name, b.name, isAsc);
                case 'type': return this.compare(a.ext, b.ext, isAsc);
            }
        });
    }

}      

