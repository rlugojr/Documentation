# Babylon.js - Official documentation website

![](http://babylonjs.com/Assets/Logo.png)

Welcome on the repository of the official documentation of [Babylon.js](http://www.babylonjs.com).

## Prequisites
Before beginning, please be sure to have these packages installed :

 * [Nodejs](https://nodejs.org/)
 * [grunt-cli](https://www.npmjs.com/package/grunt-cli)


## Run a local copy of the documentation
 * ```git clone https://github.com/BabylonJS/Documentation.git && cd Documentation```Clone this repository
 * ```npm install``` to install all dependencies
 * ```grunt serve``` runs the server and open a tab in your default browser

## Useful command

Use ```grunt build```  to rebuild html from markdown and index the search
 
## How to contribute ?

### Update content
If you want to add/update a tutorial, an extension or a class, you have to follow these steps:

1. Head to content folder. All markdowns files are located in this folder.
2. Edit markdown 
3. Use ```grunt build```
4. Pull request :)

### Add a new category
Categories only work in exporters, tutorials, extensions folder

1. head to the root of exporters or extensions or tutorials
2. create a new folder
3. fill it with your markdown
4. head to data/statics.json
5. add your folder and files
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
