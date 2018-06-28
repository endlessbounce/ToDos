(function () {
    angular.module("todo")
        .service("restService", function ($http) {
            var self = this;

            self.findAllTodos = function () {
                var promise1 = $http.get('http://localhost:8081/todos');
                var promise2 = promise1.then(function (response) {
                    return response.data;
                }, function (response) {
                    console.log(JSON.stringify(response.data))
                });
                return promise2;
            };

            self.saveToDo = function (todo) {
                var promise1 = $http.post('http://localhost:8081/todos', todo);
                var promise2 = promise1.then(function (response) {
                    return response.data;
                }, function (response) {
                    console.log(JSON.stringify(response.data))
                });
                return promise2;
            }

            self.deleteToDo = function (id) {
                var promise1 = $http.delete('http://localhost:8081/todos/' + id);
                var promise2 = promise1.then(function (response) {
                    return response.data;
                }, function (response) {
                    console.log(JSON.stringify(response.data))
                });
                return promise2;
            }

            self.updateToDo = function (todo) {
                var promise1 = $http.put('http://localhost:8081/todos/' + todo.id, todo);
                var promise2 = promise1.then(function (response) {
                    return response.data;
                }, function (response) {
                    console.log(JSON.stringify(response.data))
                });
                return promise2;
            }
        });
})();