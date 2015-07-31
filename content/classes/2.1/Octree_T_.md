---
ID_PAGE: 6716
PG_TITLE: Octree<T>
PG_VERSION: 2.1
TAGS:
    - Octree
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



###blocks : Array&lt;OctreeBlock&lt;T&gt;&gt;




The blocks



###dynamicContent : T[]




The dynamic content



###static CreationFuncForMeshes : (entry: [AbstractMesh](page.php?p=6657), block: OctreeBlock&lt;AbstractMesh&gt;) =&gt; void




Create function for Meshes



###static CreationFuncForSubMeshes : (entry: [SubMesh](page.php?p=6783), block: OctreeBlock&lt;SubMesh&gt;) =&gt; void




Create function for SubMeshes











##Methods

###update(worldMin, worldMax, entries) &rarr; void
Update this octree





####Parameters
 | Name | Type | Description
---|---|---|---
 | worldMin | [Vector3](page.php?p=6751) | the minimum world
 | worldMax | [Vector3](page.php?p=6751) | the maximum world
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
 | frustumPlanes | [Plane](page.php?p=6755)[] | [Frustum](page.php?p=6757) plan of the mesh
optional | allowDuplicate | boolean | True if you want to duplicate it, false otherwise.
---

###intersects(sphereCenter, sphereRadius, allowDuplicate) &rarr; SmartArray&lt;T&gt;
Intersects





####Parameters
 | Name | Type | Description
---|---|---|---
 | sphereCenter | [Vector3](page.php?p=6751) | The sphere center
 | sphereRadius | number | The sphere radius
optional | allowDuplicate | boolean | True if you want to duplicate it, false otherwise.
---

###intersectsRay(ray) &rarr; SmartArray&lt;T&gt;

####Parameters
 | Name | Type | Description
---|---|---|---
 | ray | [Ray](page.php?p=6758) | @param ray
---
