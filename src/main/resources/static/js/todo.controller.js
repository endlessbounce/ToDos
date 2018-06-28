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

            //stores boolean values for switching edit mode buttons for each item
            self.editMode = [];

            //only one field can be edited at once
            self.alreadyEditing = false;

            //remember index of a currently edited item in case we delete it during editing
            self.currentEdited = null;

            restService.findAllTodos().then(function (data) {
                console.log(JSON.stringify(data));
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

            self.deleteTodo = function (id, index) {
                restService.deleteToDo(id).then(function () {
                    restService.findAllTodos().then(function (data) {
                        self.todos = data;

                        if (self.currentEdited === index) {
                            self.toggleEditMode(index);
                            self.currentEdited = null;
                        }

                        self.editMode.splice(index, 1);
                    });
                });
            }

            self.setDone = function (todo) {
               todo.isDone = true;
               console.log(JSON.stringify(todo));
                restService.updateToDo(todo).then(function () {
                    restService.findAllTodos().then(function (data) {
                        self.todos = data;
                    });
                });
            }

            self.unDo = function (todo) {
                todo.isDone = false;
                restService.updateToDo(todo).then(function () {
                    restService.findAllTodos().then(function (data) {
                        self.todos = data;
                    });
                });
            }

            self.updateTodo = function (todo, index) {
                var editAllowed = self.alreadyEditing === true;
                var nameOk = self.todos[index].name !== undefined;
                var descriptionOk = self.todos[index].description !== undefined;

                if (editAllowed && nameOk && descriptionOk) {
                    restService.updateToDo(todo).then(function () {
                        restService.findAllTodos().then(function (data) {
                            self.todos = data;
                            self.toggleEditMode(index);
                            self.currentEdited = null;
                        });
                    });
                }
            }

            self.changeEditMode = function (index) {
                if (!self.alreadyEditing) {
                    self.toggleEditMode(index);
                    self.currentEdited = index;
                }
            }

            self.toggleEditMode = function (index) {
                self.editMode[index] = self.editMode[index] ? false : true;
                self.alreadyEditing = self.alreadyEditing ? false : true;
            }
        });
})();