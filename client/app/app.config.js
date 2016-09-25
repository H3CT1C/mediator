angular.module('mediatorApp.config', [])
    .constant('SiteConfig', {
        api_url: '/api/',
        currentYear: new Date().getFullYear(),
        localStorageBase: "mediator.v1.",
        siteName: "Mediator"
    });
