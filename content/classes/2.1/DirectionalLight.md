---
ID_PAGE: 6653
PG_TITLE: DirectionalLight
PG_VERSION: 2.1
TAGS:
    - Node
    - Light
---

A directional light is defined by a direction.

The light is emitted from everywhere with a specific direction and has an infinite range.
##new [DirectionalLight](page.php?p=6653)(name, direction, scene)



Creates a [DirectionalLight](page.php?p=6653) object




####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The name of the object
 | direction | [Vector3](page.php?p=6751) | The direction of the light
 | scene | [Scene](page.php?p=6662) | The scene to create the light into
---

##Extends
 [Light](page.php?p=6652)
##Members

###direction : [Vector3](page.php?p=6751)




The direction of the light



###position : [Vector3](page.php?p=6751)




The position of the light, used to calculate shadows






###transformedPosition : [Vector3](page.php?p=6751)







###shadowOrthoScale : number




##Methods

###getAbsolutePosition() &rarr; [Vector3](page.php?p=6751)




###setDirectionToTarget(target) &rarr; [Vector3](page.php?p=6751)
Returns the normalized vector of the substraction between the given vector and the position of this light





####Parameters
 | Name | Type | Description
---|---|---|---
 | target | [Vector3](page.php?p=6751) | The given target
---

###setShadowProjectionMatrix(matrix, viewMatrix, renderList) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | matrix | [Matrix](page.php?p=6754) | 
 | viewMatrix | [Matrix](page.php?p=6754) | 
 | renderList | Array&lt;AbstractMesh&gt; | 
---

###supportsVSM() &rarr; boolean


###needRefreshPerFrame() &rarr; boolean


###computeTransformedPosition() &rarr; boolean




###transferToEffect(effect, directionUniformName) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | effect | [Effect](page.php?p=6725) | The given effect
 | directionUniformName | string | The uniform name
---
