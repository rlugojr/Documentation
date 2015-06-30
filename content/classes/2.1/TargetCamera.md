---
ID_PAGE: 6636
PG_TITLE: TargetCamera
PG_VERSION: 2.1
---
##new [TargetCamera](page.php?p=6636)(name, position, scene)



Create a new targetCamera




####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | Name of the targetCamera
 | position | [Vector3](page.php?p=6751) | Position of the targetCamera
 | scene | [Scene](page.php?p=6662) | The scene where the targetCamera will be create
---

##Extends [Camera](page.php?p=6631)
##Members

###cameraDirection : [Vector3](page.php?p=6751)




The camera direction



###cameraRotation : [Vector2](page.php?p=6750)




The camera rotation



###rotation : [Vector3](page.php?p=6751)




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
 | target | [Vector3](page.php?p=6751) | The target position
---

###getTarget() &rarr; [Vector3](page.php?p=6751)


###createRigCamera(name, cameraIndex) &rarr; [Camera](page.php?p=6631)
@override
Override [Camera](page.php?p=6631).createRigCamera

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | cameraIndex | number | 
---
