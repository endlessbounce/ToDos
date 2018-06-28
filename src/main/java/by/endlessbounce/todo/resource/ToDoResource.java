package by.endlessbounce.todo.resource;

import by.endlessbounce.todo.service.ToDoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class ToDoResource {

    @Autowired
    private ToDoService service;

    @GetMapping(value = "/todos")
    public String getAllToDos() {
        return "index";
    }

    @PutMapping(value = "/todos/{id}")
    public String putToDO(@PathVariable long id) {
        return "index";
    }

    @PostMapping(value = "/todos")
    public String postToDO() {
        return "index";
    }

    @DeleteMapping(value = "/todos/{id}")
    public String deleteToDO(@PathVariable long id) {
        return "index";
    }

}
