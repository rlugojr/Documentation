---
ID_PAGE: 5765
PG_TITLE: Bone
PG_VERSION: 2.0
---
##new [Bone](page.php?p=5765)(name, skeleton, parentBone, matrix)


Create a new [Bone](page.php?p=5765)
A skeleton (BABYLON.Skeleton) contains a hierarchy of bones (BABYLON.Bone). A bone is defined by a name, a parent (can be null) and a transformation matrix.
A tutorial about Bones and Skeletons ban be found [here](https://github.com/BabylonJS/Babylon.js/wiki/How-to-use-bones-and-skeletons)


####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | Name of the bone
 | skeleton | [Skeleton](page.php?p=5766) | The skeleton the bone belongs to
 | parentBone | [Bone](page.php?p=5765) | The parent bone of this bone
 | matrix | [Matrix](page.php?p=5811) | @param matrix
---

##Members

###name : string



The bone name


###children : [Bone](page.php?p=5765)[]



Children bones array


###animations : [Animation](page.php?p=5747)[]



Animations of this bone







##Methods

###getParent() &rarr; [Bone](page.php?p=5765)
Get the parent bone




###getLocalMatrix() &rarr; [Matrix](page.php?p=5811)
Get the local matrix




###getBaseMatrix() &rarr; [Matrix](page.php?p=5811)
Get the base matrix




###getWorldMatrix() &rarr; [Matrix](page.php?p=5811)
Get the world matrix




###getInvertedAbsoluteTransform() &rarr; [Matrix](page.php?p=5811)
Get the inverted absolute transform




###getAbsoluteMatrix() &rarr; [Matrix](page.php?p=5811)
Get the absolute matrix




###updateMatrix(matrix) &rarr; void
Update the bone matrix



####Parameters
 | Name | Type | Description
---|---|---|---
 | matrix | [Matrix](page.php?p=5811) | The update matrix
---

###markAsDirty() &rarr; void

