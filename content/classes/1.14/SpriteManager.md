---
ID_PAGE: 3367
PG_TITLE: SpriteManager
PG_VERSION: 1.14
---
##new [SpriteManager](page.php?p=3367)(name, imgUrl, capacity, cellSize, scene, epsilon)

Create a new [SpriteManager](page.php?p=3367)
A tutorial about sprites can be found [here](https://github.com/BabylonJS/Babylon.js/wiki/08-Sprites)
####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | Name of the sprite manager
 | imgUrl | string | Link of the image
 | capacity | number | The capacity of the sprite manager
 | cellSize | number | Size of cells
 | scene | [Scene](page.php?p=3274) | [Scene](page.php?p=3274) which contain the sprite Manager
optional | epsilon | number | Epsilon
---

##Members

###name : string


Name of the sprite manager

###cellSize : number


Size of cells

###sprites : [Sprite](page.php?p=3366)[]


Sprites contains in the manager

###renderingGroupId : number


The rendering group ID

###onDispose : () =&gt; void


Called on dispose



##Methods

###render() &rarr; void
Render this sprite manager


###dispose() &rarr; void
Delete the sprite manager

