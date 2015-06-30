---
ID_PAGE: 3335
PG_TITLE: CSG
PG_VERSION: 1.14
---

The [CSG](page.php?p=3335) class

##Members

###matrix : [Matrix](page.php?p=3329)


The matrix

###position : [Vector3](page.php?p=3327)


The position

###rotation : [Vector3](page.php?p=3327)


The rotation

###scaling : [Vector3](page.php?p=3327)


The scaling



##Methods

###static FromMesh(mesh) &rarr; [CSG](page.php?p=3335)
Convert [BABYLON](page.php?p=3243).Mesh to [BABYLON](page.php?p=3243).CSG

####Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [Mesh](page.php?p=3271) | @param mesh
---

###clone() &rarr; [CSG](page.php?p=3335)
Clone this [CSG](page.php?p=3335)


###union(csg) &rarr; [CSG](page.php?p=3335)
Union the [CSG](page.php?p=3335)

####Parameters
 | Name | Type | Description
---|---|---|---
 | csg | [CSG](page.php?p=3335) | using this [CSG](page.php?p=3335)
---

###unionInPlace(csg) &rarr; void
Union in place

####Parameters
 | Name | Type | Description
---|---|---|---
 | csg | [CSG](page.php?p=3335) | @param csg
---

###subtract(csg) &rarr; [CSG](page.php?p=3335)
Subtract the [CSG](page.php?p=3335)

####Parameters
 | Name | Type | Description
---|---|---|---
 | csg | [CSG](page.php?p=3335) | using this [CSG](page.php?p=3335)
---

###subtractInPlace(csg) &rarr; void
Subtract in place

####Parameters
 | Name | Type | Description
---|---|---|---
 | csg | [CSG](page.php?p=3335) | @param csg
---

###intersect(csg) &rarr; [CSG](page.php?p=3335)
Intersect first solid with the second

####Parameters
 | Name | Type | Description
---|---|---|---
 | csg | [CSG](page.php?p=3335) | @param csg
---

###intersectInPlace(csg) &rarr; void
Intersect in place

####Parameters
 | Name | Type | Description
---|---|---|---
 | csg | [CSG](page.php?p=3335) | @param csg
---

###inverse() &rarr; [CSG](page.php?p=3335)
Return a new [BABYLON](page.php?p=3243).CSG solid with solid and empty space swtiched. This solid is not modified.


###inverseInPlace() &rarr; void
Inverse in place


###copyTransformAttributes(csg) &rarr; [CSG](page.php?p=3335)
This is used to keep meshes transformations so they can be restored
when we build back a [BABYLON](page.php?p=3243).Mesh
NB : All [CSG](page.php?p=3335) operations are performed in world coordinates

####Parameters
 | Name | Type | Description
---|---|---|---
 | csg | [CSG](page.php?p=3335) | @param csg
---

###buildMeshGeometry(name, scene, keepSubMeshes) &rarr; [Mesh](page.php?p=3271)
Build raw mesh from [CSG](page.php?p=3335)
Coordinates here are in world space

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | @param name
 | scene | [Scene](page.php?p=3274) | @param scene
 | keepSubMeshes | boolean | @param keepSubMeshes
---

###toMesh(name, material, scene, keepSubMeshes) &rarr; [Mesh](page.php?p=3271)
Build [Mesh](page.php?p=3271) from [CSG](page.php?p=3335) taking material and transform into account

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | @param name
 | material | [Material](page.php?p=3312) | @param material
 | scene | [Scene](page.php?p=3274) | @param scene
 | keepSubMeshes | boolean | @param keepSubMeshes
---
