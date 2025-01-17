﻿(function () {
    'use strict';

    function migrationService($http) {

        var serviceRoot = Umbraco.Sys.ServerVariables.uSyncMigrations.migrationService;

        return {
            hasPending: hasPending,
            getMigrationOptions: getMigrationOptions,
            migrate: migrate,
            getProfiles: getProfiles,
            validateSource: validateSource,
            validate: validate
        };

        function hasPending() {
            return $http.get(serviceRoot + "HasPendingMigration");
        }

        function getMigrationOptions() {
            return $http.get(serviceRoot + "GetMigrationOptions");
        }

        function migrate(options) {
            return $http.post(serviceRoot + "Migrate", options);
        }

        function getProfiles() {
            return $http.get(serviceRoot + "GetProfiles");
        }

        function validateSource(source) {
            return $http.get(serviceRoot + "ValidateSource/?source=" + source);
        }

        function validate(options) {
            return $http.post(serviceRoot + "Validate", options);
        }
    }

    angular.module('umbraco').factory('uSyncMigrationService', migrationService);
})();
