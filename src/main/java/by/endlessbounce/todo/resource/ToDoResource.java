package by.endlessbounce.todo.resource;

import by.endlessbounce.todo.model.ToDo;
import by.endlessbounce.todo.service.ToDoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ToDoResource {

    @Autowired
    private ToDoService service;

    @GetMapping(value = "/todos")
    public List<ToDo> findAllToDos() {
        return service.findAll();
    }

    @PutMapping(value = "/todos/{id}")
    public void putToDO(@PathVariable long id, @RequestBody ToDo todo) {
        service.updateTodo(todo);
    }

    @PostMapping(value = "/todos")
    public void postToDO(@RequestBody ToDo todo) {
        service.addTodo(todo);
    }

    @DeleteMapping(value = "/todos/{id}")
    public void deleteToDO(@PathVariable long id) {
        service.deleteTodo(id);
    }

}
