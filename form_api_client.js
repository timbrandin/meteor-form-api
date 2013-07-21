
// If we're using Handlebars, render the form.
if (typeof Handlebars !== 'undefined') {
  Handlebars.registerHelper('form', function (fields) {
    return new Handlebars.SafeString(Template.form({fields: o2a(fields)}));
  });
}

Template.form.helpers({
  field: function (field) {
    return new Handlebars.SafeString(Template.field(field));
  }
});

Template.field.helpers({
  field: function (field) {
    if (!Template[field.as]) {
      field.as = 'textfield';
    }
    return new Handlebars.SafeString(Template[field.as]({field: field}));
  }
});

// Extend daterange with defaults.
Template.daterange.created = function() {
  this.data.label = 'Ongoing';
};

/**
 * Helper to convert an object to array.
 */
function o2a(o) {
  var a = [];
  for (var prop in o){
    if (o.hasOwnProperty(prop)){
      a.push({
        'key' : prop,
        'value' : o[prop]
       });
    }
  }
  return a;
}