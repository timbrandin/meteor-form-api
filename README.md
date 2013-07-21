meteor-form-api
===============

Form API for Meteor

* This is not the official implementation, but just a sketch how it could work templating wise.. to simplify stuff, and speed up prototyping apps.
* Follow this to see the official Forms implementation: https://trello.com/c/qDjlN5C7/8-easy-forms
* For other inspiration: http://forms.meteor.com/
* Other threads in this topic: https://github.com/meteor/meteor/issues/1054?source=c
* Please post issues if you have any suggestions/ideas/etc.

## A form would be created by specifying the fields wanted (updated 7/21/13):
    
    {
      title: 'Project',
      fields: {
        title: {
          label: 'Title'
        },

        description: {
          as: 'textarea',
          label: 'Description'
        },

        features: {
          as: 'list',
          label: 'Features',
        },

        team: {
          label: 'Team',
          hint: 'Number of team members'
        },

        skills: {
          as: 'autocomplete',
          label: 'Skills',
          hint: 'Add skills used'
        },

        range: {
          as: 'daterange',
          label: 'Date range'
        }
      },
      actions: {
        cancel: {},
        submit: {
          label: 'Save',
          submit: [
            function(form, form_state) {
              return true;
            }
          ]
        }
      }
    }
