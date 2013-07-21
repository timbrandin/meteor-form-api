meteor-form-api
===============

Form API for Meteor

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
