# Babylon.js - Official documentation website

![](http://babylonjs.com/Assets/Logo.png)

Welcome on the repository of the official documentation of [Babylon.js](http://www.babylonjs.com).

## Prequisites
Before beginning, please be sure to have these packages installed :

 * [Nodejs](https://nodejs.org/)
 * [grunt-cli](https://www.npmjs.com/package/grunt-cli) : just use ```npm install -g grunt-cli```


## Run a local copy of the documentation
 * ```git clone https://github.com/BabylonJS/Documentation.git && cd Documentation```Clone this repository
 * ```npm install``` to install all dependencies
 * ```grunt serve``` runs the server and open a tab in your default browser

## Useful command

You don't need to edit html yourself: edit markdown files and use :
 
```grunt build``` to rebuild html from markdown and index the search.

If you want to edit some styles or see your changes without repeating ```grunt build```, then use ```grunt serve```.


```grunt serve``` features :
 * Opens automatically the browser at ```localhost:3000```
 * Watcher on markdown
 * Recompiles everything on detected change

 
## How to contribute ?

### Update content
If you want to add/update a tutorial, an extension or a class, you have to follow these steps:

1. Head to content folder. All markdowns files are located in this folder.
2. Edit markdown acording to your need
3. Use ```grunt build```
4. Pull request :)

NB : Sections like : 

    ---
    ID_PAGE: 24441       // Id of the page in the old doc, use to forward links
    PG_TITLE: Cheetah3D  // Name of the page in the old doc
    TAGS:
        - Cheetah3D      // Deprecated, will be remove soon, except for classes
    ---
Are YAML meta description for files, this is used to make some link between the old and the new documentation.

Wherever you find these, please don't touch them :)

### Add a new content
Categories classify the content, it is implemented and can be seen in :
    * [tutorials](http://doc.babylonjs.com/tutorials)
    * [exporters](http://doc.babylonjs.com/exporters)
    * [extensions](http://doc.babylonjs.com/extensions)
    
If you want to add your own :

1. Head to the root of exporters or extensions or tutorials
2. Create a new folder (or use an existing one)
3. Fill it with your markdown
4. Head to data/statics.json
5. Add your folder and files
6. Use ```grunt build```
7. Pull request :)


#### statics.json structure

The three root arrays are mandatory, when displayed, object's order is kept.

Here is how the object is structured.

    {
        "tutorials": [                         // Mandatory
            {                                  // This object represents a folder inside the tutorials folder 
              "title": "title displayed",      // The title displayed in the list of folders 
              "name": "foldername",            // The folder name with no spaces, no special chars except underscores
              "img": "img/tutorials/name.jpg", // Place your image inside the public/img/tutorials/
              "desc": "my great tutos serie",  // This is the description of the folder, don't make it too long :)
              "files": [                       // This is the list of files inside your folder
                {
                    "title":'tuto title',      // The title displayed in the list of tutorials 
                    "filename":'tuto title',   // The file name with no spaces, no special chars except underscores, and no extension
                },
                ...
              ]
            },
            ...
        ],
        "exporters": [],                       // Mandatory
        "extensions": []                       // Mandatory
    }

### Build documentation for your own version of BabylonJs

This can be done very easily by following these steps:
    * Get a local copy of the documentation
    * Head to scripts\helpers\builder\sources
    * Add your typescript description file in the current folder
    * Make sure your file name is like 'babylon.<version>.d.ts'
    * Head to scripts\helpers\builder
    * Open the config.js file
    * Change the ```version``` and the ```previousVersion``` properties
    * Head to content\classes
    * Make sure there is no folder named like the version you want to build
    * Open your command shell and run ```npm run build```
    * Rebuild the doc : ```grunt build```
    
NB : For safety, you need to delete yourself the version of classes in content\classes in order to rebuild the same version. 

####Still doesn't work ?
Please leave us an issue with a link to your .d.ts and your config file. 