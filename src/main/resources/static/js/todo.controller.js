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
            self.test = 1;

            //get form data on load of the page
            restService.findAllTodos().then(function (data) {
                console.log("response data: " + data);
                self.todos = data;
            });

        });
})();