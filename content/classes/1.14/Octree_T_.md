---
ID_PAGE: 3303
PG_TITLE: Octree<T>
PG_VERSION: 1.14
---

Data structure class based on space coordinates
##new Octree&lt;T&gt;(creationFunc, maxBlockCapacity, maxDepth)

The Octree constructor
####Parameters
 | Name | Type | Description
---|---|---|---
 | creationFunc | (entry: T, block: OctreeBlock&lt;T&gt;) =&gt; void | The function used to add a mesh in this octree
optional | maxBlockCapacity | number | @param maxBlockCapacity
optional | maxDepth | number | @param maxDepth
---

##Members

###maxDepth : number


The maxDepth

###blocks : OctreeBlock&lt;T&gt;[]


The blocks

###dynamicContent : T[]


The dynamic content

###static CreationFuncForMeshes : (entry: [AbstractMesh](page.php?p=3269), block: OctreeBlock&lt;AbstractMesh&gt;) =&gt; void


Create function for Meshes

###static CreationFuncForSubMeshes : (entry: [SubMesh](page.php?p=3339), block: OctreeBlock&lt;SubMesh&gt;) =&gt; void


Create function for SubMeshes



##Methods

###update(worldMin, worldMax, entries) &rarr; void
Update this octree

####Parameters
 | Name | Type | Description
---|---|---|---
 | worldMin | [Vector3](page.php?p=3327) | the minimum world
 | worldMax | [Vector3](page.php?p=3327) | the maximum world
 | entries | T[] | @param entries
---

###addMesh(entry) &rarr; void
Add a mesh to this octree

####Parameters
 | Name | Type | Description
---|---|---|---
 | entry | T | @param entry
---

###select(frustumPlanes, allowDuplicate) &rarr; SmartArray&lt;T&gt;
Select octree

####Parameters
 | Name | Type | Description
---|---|---|---
 | frustumPlanes | [Plane](page.php?p=3330)[] | [Frustum](page.php?p=3332) plan of the mesh
optional | allowDuplicate | boolean | True if you want to duplicate it, false otherwise.
---

###intersects(sphereCenter, sphereRadius, allowDuplicate) &rarr; SmartArray&lt;T&gt;
Intersects

####Parameters
 | Name | Type | Description
---|---|---|---
 | sphereCenter | [Vector3](page.php?p=3327) | The sphere center
 | sphereRadius | number | The sphere radius
optional | allowDuplicate | boolean | True if you want to duplicate it, false otherwise.
---

###intersectsRay(ray) &rarr; SmartArray&lt;T&gt;
Intersects ray

####Parameters
 | Name | Type | Description
---|---|---|---
 | ray | [Ray](page.php?p=3333) | @param ray
---
