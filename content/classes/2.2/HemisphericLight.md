---
ID_PAGE: 25142
PG_TITLE: HemisphericLight
PG_VERSION: 2.1
TAGS:
    - Node
    - Light
---
##Description

class [HemisphericLight](/classes/2.2/HemisphericLight) extends [Light](/classes/2.2/Light)



##Constructor

##new [HemisphericLight](/classes/2.2/HemisphericLight)(name, direction, scene)

Creates a new [HemisphericLight](/classes/2.2/HemisphericLight) object

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | direction | [Vector3](/classes/2.2/Vector3) | 
 | scene | [Scene](/classes/2.2/Scene) | 

##Members

###direction : [Vector3](/classes/2.2/Vector3)

The direction of the light

###groundColor : [Color3](/classes/2.2/Color3)

The ground color

##Methods

###setDirectionToTarget(target) &rarr; [Vector3](/classes/2.2/Vector3)

Sets the direction of the light using the given target

####Parameters
 | Name | Type | Description
---|---|---|---
 | target | [Vector3](/classes/2.2/Vector3) | 

###getShadowGenerator() &rarr; [ShadowGenerator](/classes/2.2/ShadowGenerator)

Returns null
###transferToEffect(effect, directionUniformName, groundColorUniformName) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | effect | [Effect](/classes/2.2/Effect) | 
 | directionUniformName | string | 
 | groundColorUniformName | string | 

