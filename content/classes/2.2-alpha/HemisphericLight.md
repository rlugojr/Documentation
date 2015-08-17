---
ID_PAGE: 25142
PG_TITLE: HemisphericLight
PG_VERSION: 2.1
TAGS:
    - Node
    - Light
---
##Description

class [HemisphericLight](/classes/2.2-alpha/HemisphericLight) extends [Light](/classes/2.2-alpha/Light)



##Constructor

##new [HemisphericLight](/classes/2.2-alpha/HemisphericLight)(name, direction, scene)

Creates a new [HemisphericLight](/classes/2.2-alpha/HemisphericLight) object

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | direction | [Vector3](/classes/2.2-alpha/Vector3) | 
 | scene | [Scene](/classes/2.2-alpha/Scene) | 

##Members

###direction : [Vector3](/classes/2.2-alpha/Vector3)

The direction of the light

###groundColor : [Color3](/classes/2.2-alpha/Color3)

The ground color

##Methods

###setDirectionToTarget(target) &rarr; [Vector3](/classes/2.2-alpha/Vector3)

Sets the direction of the light using the given target

####Parameters
 | Name | Type | Description
---|---|---|---
 | target | [Vector3](/classes/2.2-alpha/Vector3) | 

###getShadowGenerator() &rarr; [ShadowGenerator](/classes/2.2-alpha/ShadowGenerator)

Returns null
###transferToEffect(effect, directionUniformName, groundColorUniformName) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | effect | [Effect](/classes/2.2-alpha/Effect) | 
 | directionUniformName | string | 
 | groundColorUniformName | string | 

