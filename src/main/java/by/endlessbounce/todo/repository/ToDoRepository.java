package by.endlessbounce.todo.repository;

import by.endlessbounce.todo.model.ToDo;
import org.springframework.data.repository.CrudRepository;

public interface ToDoRepository extends CrudRepository<ToDo, Long> {
}
