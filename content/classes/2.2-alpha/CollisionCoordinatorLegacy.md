---
ID_PAGE: 25195
PG_TITLE: CollisionCoordinatorLegacy
PG_VERSION: 2.1
TAGS:
    - Collision
---
##Description

class [CollisionCoordinatorLegacy](/classes/2.2-alpha/CollisionCoordinatorLegacy)



##Methods

###getNewPosition(position, velocity, collider, maximumRetry, excludedMesh, onNewPosition, collisionIndex) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | position | [Vector3](/classes/2.2-alpha/Vector3) | 
 | velocity | [Vector3](/classes/2.2-alpha/Vector3) | 
 | collider | [Collider](/classes/2.2-alpha/Collider) | 
 | maximumRetry | number | 
 | excludedMesh | [AbstractMesh](/classes/2.2-alpha/AbstractMesh) | 
 | onNewPosition | (collisionIndex: number, newPosition: [Vector3](/classes/2.2-alpha/Vector3), collidedMesh: [AbstractMesh](/classes/2.2-alpha/AbstractMesh)) =&gt; void | 
 | collisionIndex | number | 

###init(scene) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/2.2-alpha/Scene) | 

###destroy() &rarr; void


###onMeshAdded(mesh) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/2.2-alpha/AbstractMesh) | 

###onMeshUpdated(mesh) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/2.2-alpha/AbstractMesh) | 

###onMeshRemoved(mesh) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/2.2-alpha/AbstractMesh) | 

###onGeometryAdded(geometry) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | geometry | [Geometry](/classes/2.2-alpha/Geometry) | 

###onGeometryUpdated(geometry) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | geometry | [Geometry](/classes/2.2-alpha/Geometry) | 

###onGeometryDeleted(geometry) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | geometry | [Geometry](/classes/2.2-alpha/Geometry) | 

