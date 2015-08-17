---
ID_PAGE: 25141
PG_TITLE: DirectionalLight
PG_VERSION: 2.1
TAGS:
    - Node
    - Light
---
##Description

class [DirectionalLight](/classes/2.2-alpha/DirectionalLight) extends [Light](/classes/2.2-alpha/Light)



##Constructor

##new [DirectionalLight](/classes/2.2-alpha/DirectionalLight)(name, direction, scene)

Creates a [DirectionalLight](/classes/2.2-alpha/DirectionalLight) object

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | direction | [Vector3](/classes/2.2-alpha/Vector3) | 
 | scene | [Scene](/classes/2.2-alpha/Scene) | 

##Members

###direction : [Vector3](/classes/2.2-alpha/Vector3)

The direction of the light

###position : [Vector3](/classes/2.2-alpha/Vector3)

The position of the light, used to calculate shadows

###transformedPosition : [Vector3](/classes/2.2-alpha/Vector3)



###shadowOrthoScale : number



##Methods

###getAbsolutePosition() &rarr; [Vector3](/classes/2.2-alpha/Vector3)


###setDirectionToTarget(target) &rarr; [Vector3](/classes/2.2-alpha/Vector3)

Returns the normalized vector of the substraction between the given vector and the position of this light

####Parameters
 | Name | Type | Description
---|---|---|---
 | target | [Vector3](/classes/2.2-alpha/Vector3) | 

###setShadowProjectionMatrix(matrix, viewMatrix, renderList) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | matrix | [Matrix](/classes/2.2-alpha/Matrix) | 
 | viewMatrix | [Matrix](/classes/2.2-alpha/Matrix) | 
 | renderList | Array&lt;[AbstractMesh](/classes/2.2-alpha/AbstractMesh)&gt; | 

###supportsVSM() &rarr; boolean


###needRefreshPerFrame() &rarr; boolean


###computeTransformedPosition() &rarr; boolean


###transferToEffect(effect, directionUniformName) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | effect | [Effect](/classes/2.2-alpha/Effect) | 
 | directionUniformName | string | 

