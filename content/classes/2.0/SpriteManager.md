---
ID_PAGE: 5865
PG_TITLE: SpriteManager
PG_VERSION: 2.0
---
##new [SpriteManager](page.php?p=5865)(name, imgUrl, capacity, cellSize, scene, epsilon)


Create a new [SpriteManager](page.php?p=5865)
A tutorial about sprites can be found [here](https://github.com/BabylonJS/Babylon.js/wiki/08-Sprites)


####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | Name of the sprite manager
 | imgUrl | string | Link of the image
 | capacity | number | The capacity of the sprite manager
 | cellSize | number | Size of cells
 | scene | [Scene](page.php?p=5725) | [Scene](page.php?p=5725) which contain the sprite Manager
optional | epsilon | number | Epsilon
---

##Members

###name : string



Name of the sprite manager


###cellSize : number



Size of cells


###sprites : [Sprite](page.php?p=5864)[]



Sprites contains in the manager


###renderingGroupId : number



The rendering group ID


###onDispose : () =&gt; void



Called on dispose





###fogEnabled : boolean




##Methods

###render() &rarr; void
Render this sprite manager




###dispose() &rarr; void

