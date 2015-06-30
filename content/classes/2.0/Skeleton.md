---
ID_PAGE: 5766
PG_TITLE: Skeleton
PG_VERSION: 2.0
---
##new [Skeleton](page.php?p=5766)(name, id, scene)


A skeleton (BABYLON.Skeleton) contains a hierarchy of bones (BABYLON.Bone).
All bones can be found into the skeleton.bones array.
A tutorial about Bones and Skeletons ban be found [here](https://github.com/BabylonJS/Babylon.js/wiki/How-to-use-bones-and-skeletons)


####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | Name of the skeleton
 | id | string | ID of the skeleton
 | scene | [Scene](page.php?p=5725) | The scene where the skeleton is
---

##Members

###name : string



Name of the skeleton


###id : string



Name of the skeleton


###bones : [Bone](page.php?p=5765)[]



Array of bones composing the skeleton







##Methods

###getTransformMatrices() &rarr; Float32Array
Get the transform matrices of the skeleton




###prepare() &rarr; void
Prepare bones' skeleton




###getAnimatables() &rarr; IAnimatable[]
Get the animatables of the skeleton




###clone(name, id) &rarr; [Skeleton](page.php?p=5766)

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | id | string | 
---
