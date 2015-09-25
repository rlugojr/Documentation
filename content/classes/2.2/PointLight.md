---
ID_PAGE: 25143
PG_TITLE: PointLight
PG_VERSION: 2.1
TAGS:
    - Node
    - Light
---
##Description

class [PointLight](/classes/2.2/PointLight) extends [Light](/classes/2.2/Light)



##Constructor

##new [PointLight](/classes/2.2/PointLight)(name, position, scene)

Creates a new [PointLight](/classes/2.2/PointLight) object

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | position | [Vector3](/classes/2.2/Vector3) | 
 | scene | [Scene](/classes/2.2/Scene) | 

##Members

###position : [Vector3](/classes/2.2/Vector3)

The position of the emitting point

##Methods

###getAbsolutePosition() &rarr; [Vector3](/classes/2.2/Vector3)


###transferToEffect(effect, positionUniformName) &rarr; void

Gives the light to position with the given effect with given position name

####Parameters
 | Name | Type | Description
---|---|---|---
 | effect | [Effect](/classes/2.2/Effect) | 
 | positionUniformName | string | 

###getShadowGenerator() &rarr; [ShadowGenerator](/classes/2.2/ShadowGenerator)


