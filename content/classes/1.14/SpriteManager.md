---
ID_PAGE: 24575
PG_TITLE: SpriteManager
PG_VERSION: 1.14
---
##new [SpriteManager](/classes/SpriteManager)(name, imgUrl, capacity, cellSize, scene, epsilon)

Create a new [SpriteManager](/classes/SpriteManager)
A tutorial about sprites can be found [here](https://github.com/BabylonJS/Babylon.js/wiki/08-Sprites)
####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | Name of the sprite manager
 | imgUrl | string | Link of the image
 | capacity | number | The capacity of the sprite manager
 | cellSize | number | Size of cells
 | scene | [Scene](/classes/Scene) | [Scene](/classes/Scene) which contain the sprite Manager
optional | epsilon | number | Epsilon
---

##Members

###name : string


Name of the sprite manager

###cellSize : number


Size of cells

###sprites : [Sprite](/classes/Sprite)[]


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

