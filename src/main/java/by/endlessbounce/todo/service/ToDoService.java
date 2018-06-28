package by.endlessbounce.todo.service;

import by.endlessbounce.todo.model.ToDo;
import by.endlessbounce.todo.repository.ToDoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ToDoService {

    @Autowired
    private ToDoRepository repository;

    public List<ToDo> findAll(){
        List<ToDo> allTodo = new ArrayList<>();
        repository.findAll()
                .forEach(todo -> allTodo.add(todo));

        return allTodo;
    }

    public void addTodo(ToDo todo){
        repository.save(todo);
    }

    public void updateTodo(ToDo todo){
        repository.save(todo);
    }

    public void deleteTodo(long id){
        repository.delete(id);
    }

}
