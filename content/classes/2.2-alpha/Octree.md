---
ID_PAGE: 25204
PG_TITLE: Octree<T>
PG_VERSION: 2.1
---
##Description

class [Octree](/classes/2.2-alpha/Octree)



##Constructor

##new [Octree](/classes/2.2-alpha/Octree)(creationFunc, maxBlockCapacity, maxDepth)



####Parameters
 | Name | Type | Description
---|---|---|---
 | creationFunc | (entry: T, block: [OctreeBlock](/classes/2.2-alpha/OctreeBlock)&lt;T&gt;) =&gt; void | 
optional | maxBlockCapacity | number | 
optional | maxDepth | number | 

##Members

###maxDepth : number

The maxDepth

###blocks : Array&lt;[OctreeBlock](/classes/2.2-alpha/OctreeBlock)&lt;T&gt;&gt;

The blocks

###dynamicContent : T[]

The dynamic content

###static CreationFuncForMeshes : (entry: [AbstractMesh](/classes/2.2-alpha/AbstractMesh), block: [OctreeBlock](/classes/2.2-alpha/OctreeBlock)&lt;[AbstractMesh](/classes/2.2-alpha/AbstractMesh)&gt;) =&gt; void

Create function for Meshes

###static CreationFuncForSubMeshes : (entry: [SubMesh](/classes/2.2-alpha/SubMesh), block: [OctreeBlock](/classes/2.2-alpha/OctreeBlock)&lt;[SubMesh](/classes/2.2-alpha/SubMesh)&gt;) =&gt; void

Create function for SubMeshes

##Methods

###update(worldMin, worldMax, entries) &rarr; void

Update this octree

####Parameters
 | Name | Type | Description
---|---|---|---
 | worldMin | [Vector3](/classes/2.2-alpha/Vector3) | 
 | worldMax | [Vector3](/classes/2.2-alpha/Vector3) | 
 | entries | T[] | 

###addMesh(entry) &rarr; void

Add a mesh to this octree

####Parameters
 | Name | Type | Description
---|---|---|---
 | entry | T | 

###select(frustumPlanes, allowDuplicate) &rarr; [SmartArray](/classes/2.2-alpha/SmartArray)&lt;T&gt;

Select octree

####Parameters
 | Name | Type | Description
---|---|---|---
 | frustumPlanes | [Plane](/classes/2.2-alpha/Plane)[] | 
optional | allowDuplicate | boolean | 

###intersects(sphereCenter, sphereRadius, allowDuplicate) &rarr; [SmartArray](/classes/2.2-alpha/SmartArray)&lt;T&gt;

Intersects

####Parameters
 | Name | Type | Description
---|---|---|---
 | sphereCenter | [Vector3](/classes/2.2-alpha/Vector3) | 
 | sphereRadius | number | 
optional | allowDuplicate | boolean | 

###intersectsRay(ray) &rarr; [SmartArray](/classes/2.2-alpha/SmartArray)&lt;T&gt;



####Parameters
 | Name | Type | Description
---|---|---|---
 | ray | [Ray](/classes/2.2-alpha/Ray) | 

