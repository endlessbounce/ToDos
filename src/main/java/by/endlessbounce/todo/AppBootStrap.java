package by.endlessbounce.todo;

import by.endlessbounce.todo.model.ToDo;
import by.endlessbounce.todo.service.ToDoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AppBootStrap implements CommandLineRunner {

    @Autowired
    private ToDoService service;

    public static void main(String[] args) {
        SpringApplication.run(AppBootStrap.class, args);
    }

    @Override
    public void run(String... strings) throws Exception {
        service.addTodo(new ToDo(0L, "read", "read a lot", false));
        service.addTodo(new ToDo(1L, "write", "write a lot", false));
        service.addTodo(new ToDo(2L, "think", "think a lot", false));
    }
}
