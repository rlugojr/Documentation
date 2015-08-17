---
ID_PAGE: 25144
PG_TITLE: SpotLight
PG_VERSION: 2.1
TAGS:
    - Node
    - Light
---
##Description

class [SpotLight](/classes/2.2-alpha/SpotLight) extends [Light](/classes/2.2-alpha/Light)



##Constructor

##new [SpotLight](/classes/2.2-alpha/SpotLight)(name, position, direction, angle, exponent, scene)

Creates a new [SpotLight](/classes/2.2-alpha/SpotLight) object

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | position | [Vector3](/classes/2.2-alpha/Vector3) | 
 | direction | [Vector3](/classes/2.2-alpha/Vector3) | 
 | angle | number | 
 | exponent | number | 
 | scene | [Scene](/classes/2.2-alpha/Scene) | 

##Members

###position : [Vector3](/classes/2.2-alpha/Vector3)

The position of the emitting point

###direction : [Vector3](/classes/2.2-alpha/Vector3)

The direction of the light

###angle : number

The size of the spotlight beam

###exponent : number

The speed of the decay of the light with distance

###transformedPosition : [Vector3](/classes/2.2-alpha/Vector3)



##Methods

###getAbsolutePosition() &rarr; [Vector3](/classes/2.2-alpha/Vector3)


###setShadowProjectionMatrix(matrix, viewMatrix, renderList) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | matrix | [Matrix](/classes/2.2-alpha/Matrix) | 
 | viewMatrix | [Matrix](/classes/2.2-alpha/Matrix) | 
 | renderList | Array&lt;[AbstractMesh](/classes/2.2-alpha/AbstractMesh)&gt; | 

###supportsVSM() &rarr; boolean


###needRefreshPerFrame() &rarr; boolean


###setDirectionToTarget(target) &rarr; [Vector3](/classes/2.2-alpha/Vector3)

Changes the light diretion to point to the given point

####Parameters
 | Name | Type | Description
---|---|---|---
 | target | [Vector3](/classes/2.2-alpha/Vector3) | 

###computeTransformedPosition() &rarr; boolean


###transferToEffect(effect, positionUniformName, directionUniformName) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | effect | [Effect](/classes/2.2-alpha/Effect) | 
 | positionUniformName | string | 
 | directionUniformName | string | 

