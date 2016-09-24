angular.module('mediatorApp')
    .factory('$localStorage', function(SiteConfig) {
        var base = SiteConfig.localStorageBase;
        return {
            get: function(key) {
                return localStorage.getItem(base + key);
            },
            set: function(key, val) {
                return localStorage.setItem(base + key, val);
            },
            remove: function(key) {
                return localStorage.removeItem(base + key);
            }
        };
    });
