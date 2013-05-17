
// If we're using Handlebars, render the form.
if (typeof Handlebars !== 'undefined') {
  Handlebars.registerHelper('form', function (fields) {
    return new Handlebars.SafeString(Template.form({fields: fields}));
  });
}

Template.form.helpers({
  field: function (field) {
    return new Handlebars.SafeString(Template.field(field));
  }
});

Template.field.helpers({
  field: function (field) {
    if (!Template[field.type]) {
      field.type = 'textfield';
    }
    return new Handlebars.SafeString(Template[field.type]({field: field}));
  }
});