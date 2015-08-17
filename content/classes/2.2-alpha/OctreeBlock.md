---
ID_PAGE: 25205
PG_TITLE: OctreeBlock<T>
PG_VERSION: 2.1
---
##Description

class [OctreeBlock](/classes/2.2-alpha/OctreeBlock)



##Constructor

##new [OctreeBlock](/classes/2.2-alpha/OctreeBlock)(minPoint, maxPoint, capacity, depth, maxDepth, creationFunc)



####Parameters
 | Name | Type | Description
---|---|---|---
 | minPoint | [Vector3](/classes/2.2-alpha/Vector3) | 
 | maxPoint | [Vector3](/classes/2.2-alpha/Vector3) | 
 | capacity | number | 
 | depth | number | 
 | maxDepth | number | 
 | creationFunc | (entry: T, block: [OctreeBlock](/classes/2.2-alpha/OctreeBlock)&lt;T&gt;) =&gt; void | 

##Members

###entries : T[]

The entries

###blocks : Array&lt;[OctreeBlock](/classes/2.2-alpha/OctreeBlock)&lt;T&gt;&gt;

The blocks

###capacity : number

The capacity of the octreeBlock

###minPoint : [Vector3](/classes/2.2-alpha/Vector3)

The min point

###maxPoint : [Vector3](/classes/2.2-alpha/Vector3)

The max point

##Methods

###addEntry(entry) &rarr; void

Add an entry to this octree block. The creationFunc linked to this octreeblock is used on the given entry

####Parameters
 | Name | Type | Description
---|---|---|---
 | entry | T | 

###addEntries(entries) &rarr; void

Add an entries to this octree block.

####Parameters
 | Name | Type | Description
---|---|---|---
 | entries | T[] | 

###select(frustumPlanes, selection, allowDuplicate) &rarr; void

Select

####Parameters
 | Name | Type | Description
---|---|---|---
 | frustumPlanes | [Plane](/classes/2.2-alpha/Plane)[] | 
 | selection | [SmartArray](/classes/2.2-alpha/SmartArray)&lt;T&gt; | 
optional | allowDuplicate | boolean | 

###intersects(sphereCenter, sphereRadius, selection, allowDuplicate) &rarr; void

Intersects

####Parameters
 | Name | Type | Description
---|---|---|---
 | sphereCenter | [Vector3](/classes/2.2-alpha/Vector3) | 
 | sphereRadius | number | 
 | selection | [SmartArray](/classes/2.2-alpha/SmartArray)&lt;T&gt; | 
optional | allowDuplicate | boolean | 

###intersectsRay(ray, selection) &rarr; void

Intersects ray

####Parameters
 | Name | Type | Description
---|---|---|---
 | ray | [Ray](/classes/2.2-alpha/Ray) | 
 | selection | [SmartArray](/classes/2.2-alpha/SmartArray)&lt;T&gt; | 

###createInnerBlocks() &rarr; void


