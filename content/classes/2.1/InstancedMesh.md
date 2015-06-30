---
ID_PAGE: 6658
PG_TITLE: InstancedMesh
PG_VERSION: 2.1
---

Creates an instance based on a source mesh.
##new [InstancedMesh](page.php?p=6658)(name, source)



The [InstancedMesh](page.php?p=6658) constructor




####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | @param name
 | source | [Mesh](page.php?p=6659) | @param source
---

##Extends [AbstractMesh](page.php?p=6657)
##Members

###receiveShadows : boolean




True if the Instanced [Mesh](page.php?p=6659) got shadows, false if is not



###material : [Material](page.php?p=6726)




The material



###visibility : number




The visibility of the Instanced [Mesh](page.php?p=6659)



###skeleton : [Skeleton](page.php?p=6703)




The skeleton



###sourceMesh : [Mesh](page.php?p=6659)




The sourceMesh











##Methods

###getTotalVertices() &rarr; number
Get the total vertices of the Instanced [Mesh](page.php?p=6659)






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
Refresh Bounding Info of the Instanced [Mesh](page.php?p=6659)






###getLOD(camera) &rarr; [AbstractMesh](page.php?p=6657)



####Parameters
 | Name | Type | Description
---|---|---|---
 | camera | [Camera](page.php?p=6631) | 
---

###clone(name, newParent, doNotCloneChildren) &rarr; [InstancedMesh](page.php?p=6658)
Clone this instanced [Mesh](page.php?p=6659)





####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The given name
 | newParent | [Node](page.php?p=6630) | The parent
optional | doNotCloneChildren | boolean | True if you want to clone children, false if you don't want to.
---

###dispose(doNotRecurse) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
optional | doNotRecurse | boolean | @param doNotRecurse
---
