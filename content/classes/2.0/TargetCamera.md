---
ID_PAGE: 5705
PG_TITLE: TargetCamera
PG_VERSION: 2.0
---
##new [TargetCamera](page.php?p=5705)(name, position, scene)


Create a new targetCamera


####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | Name of the targetCamera
 | position | [Vector3](page.php?p=5808) | Position of the targetCamera
 | scene | [Scene](page.php?p=5725) | The scene where the targetCamera will be create
---

##Extends [Camera](page.php?p=5702)
##Members

###cameraDirection : [Vector3](page.php?p=5808)



The camera direction


###cameraRotation : [Vector2](page.php?p=5807)



The camera rotation


###rotation : [Vector3](page.php?p=5808)



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
 | target | [Vector3](page.php?p=5808) | The target position
---

###getTarget() &rarr; [Vector3](page.php?p=5808)

