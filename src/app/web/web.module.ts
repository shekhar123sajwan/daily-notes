import { MaterialModule } from './shared/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { LeftSideComponent } from './left-side/left-side.component';
import { RightSideComponent } from './right-side/right-side.component';
import { MenuComponent } from './menu/menu.component';
import { LoaderComponent } from './loader/loader.component';
import { DialogComponent } from './dialog/dialog.component';
import { NotesComponent } from './notes/notes.component';
import { NoteComponent } from './note/note.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WebRoutingModule } from './web-routing.module';
import { HomeComponent } from './home/home.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        MainComponent,
        LeftSideComponent,
        RightSideComponent,
        MenuComponent,
        LoaderComponent,
        DialogComponent,
        NotesComponent,
        NoteComponent,
        LoginComponent,
        RegisterComponent,
        ToolbarComponent,
    ],
    imports: [CommonModule, WebRoutingModule, MaterialModule],
})
export class WebModule {}
