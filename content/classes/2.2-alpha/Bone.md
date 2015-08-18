---
ID_PAGE: 25190
PG_TITLE: Bone
PG_VERSION: 2.1
---
##Description

class [Bone](/classes/2.2-alpha/Bone) extends [Node](/classes/2.2-alpha/Node)



##Constructor

##new [Bone](/classes/2.2-alpha/Bone)(name, skeleton, parentBone, matrix)

Create a new [Bone](/classes/2.2-alpha/Bone)
A skeleton (BABYLON.[Skeleton](/classes/2.2-alpha/Skeleton)) contains a hierarchy of bones (BABYLON.[Bone](/classes/2.2-alpha/Bone)). A bone is defined by a name, a parent (can be null) and a transformation matrix.
A tutorial about Bones and Skeletons ban be found here

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | skeleton | [Skeleton](/classes/2.2-alpha/Skeleton) | 
 | parentBone | [Bone](/classes/2.2-alpha/Bone) | 
 | matrix | [Matrix](/classes/2.2-alpha/Matrix) | 

##Members

###name : string

The bone name

###children : [Bone](/classes/2.2-alpha/Bone)[]

Children bones array

###animations : [Animation](/classes/2.2-alpha/Animation)[]

Animations of this bone

##Methods

###getParent() &rarr; [Bone](/classes/2.2-alpha/Bone)

Get the parent bone
###getLocalMatrix() &rarr; [Matrix](/classes/2.2-alpha/Matrix)

Get the local matrix
###getBaseMatrix() &rarr; [Matrix](/classes/2.2-alpha/Matrix)

Get the base matrix
###getWorldMatrix() &rarr; [Matrix](/classes/2.2-alpha/Matrix)

Get the world matrix
###getInvertedAbsoluteTransform() &rarr; [Matrix](/classes/2.2-alpha/Matrix)

Get the inverted absolute transform
###getAbsoluteMatrix() &rarr; [Matrix](/classes/2.2-alpha/Matrix)

Get the absolute matrix
###updateMatrix(matrix) &rarr; void

Update the bone matrix

####Parameters
 | Name | Type | Description
---|---|---|---
 | matrix | [Matrix](/classes/2.2-alpha/Matrix) | 

###markAsDirty() &rarr; void


