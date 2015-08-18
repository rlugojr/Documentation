---
ID_PAGE: 25191
PG_TITLE: Skeleton
PG_VERSION: 2.1
---
##Description

class [Skeleton](/classes/2.2-alpha/Skeleton)



##Constructor

##new [Skeleton](/classes/2.2-alpha/Skeleton)(name, id, scene)

A skeleton (BABYLON.[Skeleton](/classes/2.2-alpha/Skeleton)) contains a hierarchy of bones (BABYLON.[Bone](/classes/2.2-alpha/Bone)).
All bones can be found into the skeleton.bones array.
A tutorial about Bones and Skeletons ban be found here

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | id | string | 
 | scene | [Scene](/classes/2.2-alpha/Scene) | 

##Members

###name : string

Name of the skeleton

###id : string

Name of the skeleton

###bones : [Bone](/classes/2.2-alpha/Bone)[]

Array of bones composing the skeleton

##Methods

###getTransformMatrices() &rarr; Float32Array

Get the transform matrices of the skeleton
###getScene() &rarr; [Scene](/classes/2.2-alpha/Scene)


###prepare() &rarr; void

Prepare bones' skeleton
###getAnimatables() &rarr; IAnimatable[]

Get the animatables of the skeleton
###clone(name, id) &rarr; [Skeleton](/classes/2.2-alpha/Skeleton)



####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | id | string | 

