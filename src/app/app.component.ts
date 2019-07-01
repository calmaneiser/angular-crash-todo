import { Component, ViewChild } from "@angular/core";
import { TodosComponent } from "./components/todos/todos.component";
import { AddTodoComponent } from "./components/add-todo/add-todo.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  @ViewChild(TodosComponent, { static: false }) todosComponent;
  @ViewChild(AddTodoComponent, { static: false }) addtodoComponent;

  addTodoParent(data) {
    this.todosComponent.addTodo(data);
    this.addtodoComponent.title = "";
  }
}
