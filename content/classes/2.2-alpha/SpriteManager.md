---
ID_PAGE: 25306
PG_TITLE: SpriteManager
PG_VERSION: 2.1
TAGS:
    - Sprite
---
##Description

class [SpriteManager](/classes/2.2-alpha/SpriteManager)



##Constructor

##new [SpriteManager](/classes/2.2-alpha/SpriteManager)(name, imgUrl, capacity, cellSize, scene, epsilon, samplingMode)

Create a new [SpriteManager](/classes/2.2-alpha/SpriteManager)
A tutorial about sprites can be found here

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | imgUrl | string | 
 | capacity | number | 
 | cellSize | number | 
 | scene | [Scene](/classes/2.2-alpha/Scene) | 
optional | epsilon | number | 
optional | samplingMode | number | 

##Members

###name : string

Name of the sprite manager

###cellSize : number

Size of cells

###sprites : [Sprite](/classes/2.2-alpha/Sprite)[]

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


