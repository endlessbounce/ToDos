(function () {
    angular.module("todo")
        .controller("ToDoCtrl", function (restService) {
            var self = this;

            self.todo = {
                'id': 0,
                'name': "",
                'description': "",
                'isDone': false
            };
            self.todos = [];
            self.errorMsg = "Please fill in all the fields";
            self.valid = false;

            //get form data on load of the page
            restService.findAllTodos().then(function (data) {
                console.log("response data: " + data);
                self.todos = data;
            });

            self.addTodo = function () {

            }

            self.deleteTodo = function () {

            }
        });
})();