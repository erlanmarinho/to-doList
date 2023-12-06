import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//Componets
import { HeaderComponent } from './componets/header/header.component';
import { TodoButtonDeleteAllComponent } from './componets/todo-button-delete-all/todo-button-delete-all.component';
import { TodoInputAddItensComponent } from './componets/todo-input-add-itens/todo-input-add-itens.component';
import { TodoListComponent } from './componets/todo-list/todo-list.component';

//Pages
import { HomeComponent } from './pages/home/home.component';




@NgModule({
  declarations: [
    HeaderComponent,
    TodoButtonDeleteAllComponent,
    TodoInputAddItensComponent,
    TodoListComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }
