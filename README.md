meteor-form-api
===============

Form API for Meteor

## A form would be created by specifying the fields wanted:

    {
      title: 'Project',
      fields: {
      
        title: {
          type: 'textfield',
          title: 'Title',
          placeholder: 'Give me a title',
          value: value || 'Some default title'
        },
        
        description: {
          type: 'textarea',
          title: 'Description',
          placeholder: 'Please type me a description'
        },
        
        features: {
          type: 'select',
          title: 'Features'
          options: [
            'Javascript',
            'PHP',
            'Git'
          ],
        },
        
        team: {
          type: 'number',
          title: 'Team',
          description: 'Number of team members'
        },
        
        skills: {
          type: 'autocomplete',
          title: 'Skills',
          description: 'Add skills used',
          multiple: true
        },
        
        period: {
          type: 'date',
          title: 'Time period'
          range: true,
          value: [
            new Date(2010,1,1),
            new Date(2015,1,1),
          ]
        },
        
        food_preference: {
          type: 'options',
          title: 'Food preference',
          options: [
            'Chicken',
            'Fish',
            'Beef'
          ],
          description: 'Choose your food preference',
          limit: 1
        }
      }
    }
