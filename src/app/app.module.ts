import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import 'hammerjs';

import { MaterialModule, MdIconModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { CreateFileComponent } from "./createFile/createfile.component";
import { NavbarComponent } from './navbar/navbar.component';
import { FilesListComponent } from "./files-list/fileslist.component";

import { FilesService } from "./files.service";
import { OpenedFileComponent } from "./openedFile/openedfile.component";
import { ImageUploadModule } from 'angular2-image-upload'
import { OpenedImageComponent } from "./openedImage/openedimage.component";
import { RenameDialogComponent } from "./renamedialog/renamedialog.component";
import { FileSaverModule } from 'ngx-filesaver';
import { OpenedHtmlComponent } from "./openedHtml/openedhtml.component";
import { NotificationService } from "./notification.service";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CreateFileComponent,
    OpenedFileComponent,
    OpenedImageComponent,
    RenameDialogComponent,
    FilesListComponent,
    OpenedHtmlComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MdIconModule,
    FormsModule,
    ReactiveFormsModule,
    FileSaverModule,
    ImageUploadModule.forRoot()
  ],
  entryComponents: [
    CreateFileComponent, 
    OpenedFileComponent,
    OpenedImageComponent, 
    RenameDialogComponent,
    OpenedHtmlComponent
  ],
  providers: [ FilesService, NotificationService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

