---
ID_PAGE: 5721
PG_TITLE: InstancedMesh
PG_VERSION: 2.0
---

Creates an instance based on a source mesh.
##new [InstancedMesh](page.php?p=5721)(name, source)


The [InstancedMesh](page.php?p=5721) constructor


####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | @param name
 | source | [Mesh](page.php?p=5722) | @param source
---

##Extends [AbstractMesh](page.php?p=5720)
##Members

###receiveShadows : boolean



True if the Instanced [Mesh](page.php?p=5722) got shadows, false if is not


###material : [Material](page.php?p=5783)



The material


###visibility : number



The visibility of the Instanced [Mesh](page.php?p=5722)


###skeleton : [Skeleton](page.php?p=5766)



The skeleton


###sourceMesh : [Mesh](page.php?p=5722)



The sourceMesh







##Methods

###getTotalVertices() &rarr; number
Get the total vertices of the Instanced [Mesh](page.php?p=5722)




###getVerticesData(kind) &rarr; number[]
Get the vertices data



####Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string | @param kind
---

###isVerticesDataPresent(kind) &rarr; boolean
Is Vertices data present



####Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string | @param kind
---

###getIndices() &rarr; number[]
Get Indices




###refreshBoundingInfo() &rarr; void
Refresh Bounding Info of the Instanced [Mesh](page.php?p=5722)




###getLOD(camera) &rarr; [AbstractMesh](page.php?p=5720)

####Parameters
 | Name | Type | Description
---|---|---|---
 | camera | [Camera](page.php?p=5702) | 
---

###clone(name, newParent, doNotCloneChildren) &rarr; [InstancedMesh](page.php?p=5721)
Clone this instanced [Mesh](page.php?p=5722)



####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The given name
 | newParent | [Node](page.php?p=5701) | The parent
optional | doNotCloneChildren | boolean | True if you want to clone children, false if you don't want to.
---

###dispose(doNotRecurse) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
optional | doNotRecurse | boolean | @param doNotRecurse
---
