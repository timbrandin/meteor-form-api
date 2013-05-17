Package.describe({
  summary: "Form API for Meteor"
});

Package.on_use(function(api) {
  api.use('handlebars', 'client');
  api.use('templating', 'client');

  api.add_files(
    [
      'form_api_templates.html',
      'form_api_client.js'
    ],
    'client');
});