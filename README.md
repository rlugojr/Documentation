# Babylon.js - Official documentation website

![](http://babylonjs.com/Assets/Logo.png)

Welcome on the repository of the official documentation of [Babylon.js](http://www.babylonjs.com).

## Run a local copy of the documentation
 * Clone this repository
 * ```npm install``` to install all dependencies
 * ```node server.js``` runs the server
 * Open a browser at http://localhost:3000 to see the website.

## Useful commands
If you want to develop/modify your local copy of the website, here's some useful commands for you:
 * ```npm run clean-n-compile``` deletes all generated files and re-compiles everything
 * ```grunt clean``` deletes all generated files
 * ```grunt compile``` re-compiles everything
 * ```grunt index``` compile the HTML file for the home page of the site
 * ```grunt whats-new``` compile the HTML file for the What's New page of the site
 * ```grunt tags``` will read every tags related to the classes in their respective MD and compile the data/classes-tags.json file
 * ```grunt classes``` compile the HTML files for the pages listing all  the classes per version of Babylon.js and the pages for every class
 * ```grunt lists``` reads meta-data related to the exporters, extensions and tutorials, and compile theses informations into data/static-list.json
 * ```grunt statics``` reads data/static-list.json and compiles every HTML files for the exporters, extensions and tutorials pages
