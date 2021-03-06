import { Component, OnInit } from "@angular/core";
import { Todo } from "../../models/Todo";
import { TodoService } from "src/app/services/todo.service";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.scss"]
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.getTodos$().subscribe(todos => {
      this.todos = todos;
    });
  }

  onTodoToggle(todo) {
    // Toggle in UI
    todo.completed = !todo.completed;
    // Toggle on server
    this.todoService.toggleCompleted$(todo).subscribe(todos => {
      console.log(todos);
    });
  }

  onDeleteTodo(todo) {
    // Delete in UI
    this.todos = this.todos.filter(t => t.id != todo.id);
    // Delete in Server
    this.todoService.deleteTodo$(todo).subscribe();
  }

  addTodo(todo: Todo) {
    console.log(todo);
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
    });
  }
}
