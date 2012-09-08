// This is a module for cloud persistance in mongolab - https://mongolab.com
angular.module('enterpriseServices', ['ngResource']).
    factory('crewResource', function ($resource) {
        var resource = $resource('https://api.mongolab.com/api/1/databases' +
            '/enterprise/collections/crew/:id',
            { apiKey:'4f0f9e96e4b04ac27016b99a' }, {
                update:{ method:'PUT' }
            }
        );

        resource.prototype.update = function (cb) {
            return resource.update({id:this._id.$oid},
                angular.extend({}, this, {_id:undefined}), cb);
        };

        resource.prototype.destroy = function (cb) {
            return resource.remove({id:this._id.$oid}, cb);
        };

        return resource;
    });