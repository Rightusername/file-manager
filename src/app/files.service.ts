import { Injectable } from '@angular/core';
import { File } from './File'; 
import { NotificationService } from "./notification.service";

@Injectable()
export class FilesService {
    files : File[] = [];
    openedFile : File;
    filter = '';
    
    constructor( private notification: NotificationService ){
        this.getFiles();
    }

    isMatch(file){
        var re = new RegExp(this.filter.replace(/[*\[|\]\(\)]/ig,''), 'ig');
        if(file.name.match(re)) return true;
        return false;
    }

    addFile(name, content, type){
        this.files.push(new File(name, content, type));
    }

    toggleFavorite(file){
        file.favorite = !file.favorite;
        this.saveFiles();
        this.notification.show(file.name, (!file.favorite) ? 'Удален из закладок' : 'Добавлен в закладки');
    }

    deleteFile(file){
        this.files.splice(this.files.indexOf(file),1);
        this.saveFiles();
        this.notification.show(file.name, 'Удален');
    }

    getFiles(){
        this.files = JSON.parse( localStorage.getItem('files') ) || [];
    }

    saveFiles(){
        localStorage.setItem('files', JSON.stringify( this.files) );
    }

}
