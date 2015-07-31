---
ID_PAGE: 6707
PG_TITLE: CollisionCoordinatorLegacy
PG_VERSION: 2.1
TAGS:
    - Collision
---



##Methods

###getNewPosition(position, velocity, collider, maximumRetry, excludedMesh, onNewPosition, collisionIndex) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | position | [Vector3](page.php?p=6751) | 
 | velocity | [Vector3](page.php?p=6751) | 
 | collider | [Collider](page.php?p=6705) | 
 | maximumRetry | number | 
 | excludedMesh | [AbstractMesh](page.php?p=6657) | 
 | onNewPosition | (collisionIndex: number, newPosition: [Vector3](page.php?p=6751), collidedMesh?: [AbstractMesh](page.php?p=6657)) =&gt; void | 
 | collisionIndex | number | 
---

###init(scene) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](page.php?p=6662) | 
---

###destroy() &rarr; void


###onMeshAdded(mesh) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](page.php?p=6657) | 
---

###onMeshUpdated(mesh) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](page.php?p=6657) | 
---

###onMeshRemoved(mesh) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](page.php?p=6657) | 
---

###onGeometryAdded(geometry) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | geometry | [Geometry](page.php?p=6771) | 
---

###onGeometryUpdated(geometry) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | geometry | [Geometry](page.php?p=6771) | 
---

###onGeometryDeleted(geometry) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | geometry | [Geometry](page.php?p=6771) | 
---
