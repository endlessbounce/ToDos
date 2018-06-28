(function () {
    angular.module("todo")
        .controller("ToDoCtrl", function (restService) {
            var self = this;

            self.todo = {
                'id': null,
                'name': "",
                'description': "",
                'isDone': false
            };
            self.todos = [];
            self.errorMsg = "Please fill in all the fields";
            self.valid = false;
            self.editMode = false;

            //get form data on load of the page
            restService.findAllTodos().then(function (data) {
                console.log("response data: " + data);
                self.todos = data;
            });

            self.addTodo = function () {
                if (self.todo.name == "" || self.todo.description == "") {
                    self.valid = true;
                } else {
                    restService.saveToDo(self.todo).then(function () {
                        restService.findAllTodos().then(function (data) {
                            self.todos = data;
                            self.valid = false;
                            self.todo.name = "";
                            self.todo.description = "";
                        });
                    });
                }
            }

            self.deleteTodo = function (id) {
                restService.deleteToDo(id).then(function () {
                    restService.findAllTodos().then(function (data) {
                        self.todos = data;
                    });
                });
            }

            self.updateTodo = function (todo) {
                restService.updateToDo(todo).then(function () {
                    restService.findAllTodos().then(function (data) {
                        self.todos = data;
                        self.changeEditMode();
                    });
                });
            }


            self.changeEditMode = function () {
                self.editMode = self.editMode ? false : true;
            }
        });
})();