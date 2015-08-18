---
ID_PAGE: 25200
PG_TITLE: PickingInfo
PG_VERSION: 2.1
---
##Description

class [PickingInfo](/classes/2.2-alpha/PickingInfo)



##Members

###hit : boolean

True if you touch something, false otherwise.

###distance : number

Represents the distance between the screen the click on the mesh

###pickedPoint : [Vector3](/classes/2.2-alpha/Vector3)

The picked point

###pickedMesh : [AbstractMesh](/classes/2.2-alpha/AbstractMesh)

The picked abstractMesh

###bu : number

Coordinates texture of the mesh represents the x axis

###bv : number

Coordinates texture of the mesh represents the y axis

###faceId : number

The faceId of the mesh

###subMeshId : number



##Functions

###getNormal(useWorldCoordinates, useVerticesNormals) &rarr; [Vector3](/classes/2.2-alpha/Vector3)



####Parameters
 | Name | Type | Description
---|---|---|---
optional | useWorldCoordinates | boolean | 
optional | useVerticesNormals | boolean | 

###getTextureCoordinates() &rarr; [Vector2](/classes/2.2-alpha/Vector2)

