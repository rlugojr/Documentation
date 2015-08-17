---
ID_PAGE: 25124
PG_TITLE: TargetCamera
PG_VERSION: 2.1
TAGS:
    - Node
    - Camera
    - TargetCamera
---
##Description

class [TargetCamera](/classes/2.2-alpha/TargetCamera) extends [Camera](/classes/2.2-alpha/Camera)



##Constructor

##new [TargetCamera](/classes/2.2-alpha/TargetCamera)(name, position, scene)

Create a new targetCamera

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | position | [Vector3](/classes/2.2-alpha/Vector3) | 
 | scene | [Scene](/classes/2.2-alpha/Scene) | 

##Members

###cameraDirection : [Vector3](/classes/2.2-alpha/Vector3)

The camera direction

###cameraRotation : [Vector2](/classes/2.2-alpha/Vector2)

The camera rotation

###rotation : [Vector3](/classes/2.2-alpha/Vector3)

The rotation

###speed : number

The camera speed

###noRotationConstraint : boolean

True : No rotation constraint ; False : Have rotation constraint

###lockedTarget : any

The camera locked target

##Methods

###setTarget(target) &rarr; void

Set the target of the targetCamera

####Parameters
 | Name | Type | Description
---|---|---|---
 | target | [Vector3](/classes/2.2-alpha/Vector3) | 

###getTarget() &rarr; [Vector3](/classes/2.2-alpha/Vector3)


###createRigCamera(name, cameraIndex) &rarr; [Camera](/classes/2.2-alpha/Camera)

@override

Override [Camera](/classes/2.2-alpha/Camera).createRigCamera

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | cameraIndex | number | 

