---
ID_PAGE: 3270
PG_TITLE: InstancedMesh
PG_VERSION: 1.14
---

the [InstancedMesh](page.php?p=3270) Class extends [AbstractMesh](page.php?p=3269)
##new [InstancedMesh](page.php?p=3270)(name, source)

The [InstancedMesh](page.php?p=3270) constructor
####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | @param name
 | source | [Mesh](page.php?p=3271) | @param source
---

##Extends [AbstractMesh](page.php?p=3269)
##Members

###receiveShadows : boolean


True if the Instanced [Mesh](page.php?p=3271) got shadows, false if is not

###material : [Material](page.php?p=3312)


The material

###visibility : number


The visibility of the Instanced [Mesh](page.php?p=3271)

###skeleton : [Skeleton](page.php?p=3296)


The skeleton

###sourceMesh : [Mesh](page.php?p=3271)


The sourceMesh



##Methods

###getTotalVertices() &rarr; number
Get the total vertices of the Instanced [Mesh](page.php?p=3271)


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
Refresh Bounding Info of the Instanced [Mesh](page.php?p=3271)


###clone(name, newParent, doNotCloneChildren) &rarr; [InstancedMesh](page.php?p=3270)
Clone this instanced [Mesh](page.php?p=3271)

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The given name
 | newParent | [Node](page.php?p=3248) | The parent
optional | doNotCloneChildren | boolean | True if you want to clone children, false if you don't want to.
---

###dispose(doNotRecurse) &rarr; void
Dispose this instanced mesh

####Parameters
 | Name | Type | Description
---|---|---|---
optional | doNotRecurse | boolean | @param doNotRecurse
---
