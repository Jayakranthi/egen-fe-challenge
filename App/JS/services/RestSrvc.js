/**
 * Created by Kranthi on 09/11/16.
 */
myApp.factory('RestSrvc', function ($http, $q) {
    return {

        getAllUsers: function() {

            var deffered = $q.defer();
                var postUrl = "http://mocker.egen.io/users/bulk";
                //console.log('url');
                $http({
                    method: 'GET',
                    url: postUrl
                }).success(function (data, status, headers, config) {
                    //console.log(data);
                    deffered.resolve(data);
                }).error(function (data, status, headers, config) {
                    deffered.reject(status);
                    alert("We're sorry! Unfortunately there is a connectivity issue. Please try again.")
                });
            return deffered.promise;

        },


        /**
         * API Call
         * General API call for Review Controller
         * @param postUrl
         * @param data
         * @param responseData
         * @returns {*}
         */
        postAPICall: function (postUrl, data) {
            //var APIData = $.param(data);
            var deffered = $q.defer();
            console.log(data);
            $http({
                method: 'POST',
                url: postUrl,
                data: data,
                headers: {'Content-Type': "application/x-www-form-urlencoded"}
            }).success(function (data, status, headers, config) {
                console.log("Success");
                deffered.resolve(data);
            }).error(function (data, status, headers, config) {
                deffered.reject(status);
                alert("Sorry! Unfortunately there is a connectivity issue. Please try again.")
            });
            return deffered.promise;
        },
        /**
         * General GET request
         * @param getUrl The url to GET data from
         * @returns {*}
         */
        getAPICall: function(getUrl){
            var deffered = $q.defer();
            $http({
                method: 'GET',
                url: getUrl,
                headers: {'Content-Type': "application/x-www-form-urlencoded"}
            }).success(function (data, status, headers, config) {
                console.log(data);
                deffered.resolve(data);
            }).error(function (data, status, headers, config) {
                deffered.reject(status);
                alert("Sorry! Unfortunately there is a connectivity issue. Please try again.")
            });
            return deffered.promise;
        }
        ,
        deleteUser: function(url, id){
        var deffered = $q.defer();
        $http({
          method: 'DELETE',
          url: url,
          headers:{'Content-Type':undefined},
          //data:{id: id}
        }).success(function (data, status, headers, config) {
          console.log(data);
          deffered.resolve(data);
        }).error(function (data, status, headers, config) {
          deffered.reject(status);
          //alert("Sorry! Unfortunately there is a connectivity issue. Please try again.")
        });
        return deffered.promise;
      }
    }
});
