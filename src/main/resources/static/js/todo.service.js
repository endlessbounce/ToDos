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
        });
})();