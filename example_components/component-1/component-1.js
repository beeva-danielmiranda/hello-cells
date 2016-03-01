Polymer({

  is: 'component-1',

  properties: {
    /**
     * Describes the title of the element, but is really just an excuse to
     * show off JSDoc annotations.
     *
     * @type {{title: string, image: string}}
     */
    title: {
      type: String,    
      value: function() {
        return 'Welcome to Cells';           
      }
    },
    subtitle: {
      type: String,    
      value: function() {
        return 'Hi you!';
      }
    }
  }
});
