Polymer({

  is: 'custom-component',

  behaviors: [
    Polymer.i18nBehavior
  ],

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
      value: 'type here, click button and look at console',
      observer: '_textObserver'
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
    _privateProperty: String,

    /**
     * Private text with private access
     * @type {String}
     */
    _privateText: String

  },

  _textObserver: function() {
    console.log('text changed');
  },

  /**
   * Public method with public access
   * @return {void}
   */
  publicMethod: function() {
    return 'public response';
  },

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
    this._privateText = this.text;
  }

});
