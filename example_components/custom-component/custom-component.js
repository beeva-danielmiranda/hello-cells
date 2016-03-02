Polymer({

  is: 'custom-component',

  behaviors: [
    Polymer.i18nBehavior
  ],

  listeners: {
    'custom-click': '_handlerClickMethod'
  },

  properties: {
    /**
     * Describes the title of the element, but is really just an excuse to
     * show off JSDoc annotations.
     *
     * @type {{title: string, image: string}}
     */
    project: {
      type: Object,
      value: function() {
        return {
          title: 'Cells',
          image: '../images/cells.svg'
        };
      }
    },

    /**
     * Public property with public access
     * @type {String}
     */
    text: {
      type: String,
      value: 'type here, click button and look at console'
    },

    /**
     * Public property with public access
     * @type {String}
     */
    publicProperty: {
      type: String,
      value: 'test'
    },

    /**
     * Private property with private access
     * @type {String}
     */
    _privateProperty: String

  },

  /**
   * Public method with public access
   * @return {void}
   */
  publicMethod: function() {},

  /**
   * Private method with private access
   * @return {void}
   */
  _privateMethod: function() {},

  /**
   * Private method for event handler
   * @return {void}
   */
  _handlerClickMethod: function(event) {
    console.info(event);
    console.log(this.text);
  }

});
