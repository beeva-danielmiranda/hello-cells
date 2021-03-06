# hello cells

'hello-cells' is an step by step example thought-out for developers, to get the needed knowledge about how to build a CELLS app .

- Increasing its complexity by tag version
- Each step/tag is supported by a complementary guide linked  below at the end of this README.md

### Steps/Tags:

- 0.1.0 : first step, read this file.
- 1.0.0 : Application Setup Using Cells Starter Kit ([guide1])
- 2.0.0 : Components catalog and integration in app ([guide2])
- 3.0.0 : Build a Cell component ([guide3])
- 4.0.0 : API and component logic ([guide4])
- 5.0.0 : Components communication ([guide5])
- 6.0.0 : run local application ([guide6])

### Version

0.1.0

Presentation

1.0.0

In this version we have already created our application using 'yo cells-starter-kit'.
We have our application files & folders structure and can run 'sudo gulp serve' at the app folder to launch it.
By default gulp will use 'localhost:80' to serve the app and will launch our browser to see it.
At this point our app is 'empty', just with a default greeting component, so... is time to start including components.

2.0.0

For this example we have navigated to [cells catalog] looking for a nice and usefull component to start our app.
We've choosen 'buzz-ui-organism-welcome' and we have integrated it following the [guide2] instructions.

3.0.0

Now we can see how the components communicate in your app, using two simple components.
Described in [guide3]

4.0.0

At this tag we need to lear how to create our own component.
Take a look at this 'custom-component' and how easy you can create it using cells scaffold 'generator­-cells'.
./example_components/custom_component/
See commands in [guide4]

5.0.0

After create our component we would like to add some logic to it.
This tag is more Polymer focused.

6.0.0

Now we have provide to our component some tests.

6.1.0

Added computed property and tests review.

### Tech

* [node.js]
* [npm] - Node Package Manager
* [gulp] - Build system
* [cells-starter-kit]
* [cells-component-generator]


### Installation

You need Gulp installed globally:

```sh
$ npm i -g gulp
```

```sh
$ git clone TODO REPO FINAL URL
$ cd hello-cells
```

   [npm]: <https://www.npmjs.com/>
   [node.js]: <http://nodejs.org>
   [Gulp]: <http://gulpjs.com>
   [cells catalog]: <http://bbva-files.s3.amazonaws.com/cells/bbva-catalog/index.html>
   [cells-starter-kit]: <https://descinet.bbva.es/stash/scm/cel/generator-cells-starter-kit.git>
   [cells-component-generator]: <https://www.npmjs.com/package/generator-cells>
   [guide1]: <link1>
   [guide2]: <link2>
   [guide3]: <link3>
   [guide4]: <link4>
   [guide5]: <link5>
   [guide6]: <link6>
