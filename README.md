# Babylon.js - Official documentation website

![](http://babylonjs.com/Assets/Logo.png)

Welcome on the repository of the official documentation of [Babylon.js](http://www.babylonjs.com).

## Prequisites
Before beginning, please be sure to have installed these :

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
1. head to content folder
2. edit markdown 
3. Use ```grunt build```

### Add a new category
categories only work in exporters, tutorials, extensions folder

1. head to the root of exporters or extensions or tutorials
2. create a new folder
3. fill it with your markdown
4. head to data/statics.json
5. add your folder and files


#### statics.json structure

    {
        "tutorials": [
            {
              "name": "foldername",
              "img": "img/tutorials/name.jpg",
              "desc": "my great tutos serie",
              "files": [
                {
                    "name":'tuto title',
                    "src": "file_name_without_extension"
                },
                ...
              ]
            },
            ...
        ],
        "exporters": [],
        "extensions": []
    }
