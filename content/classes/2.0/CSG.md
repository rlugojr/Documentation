---
ID_PAGE: 5822
PG_TITLE: CSG
PG_VERSION: 2.0
---

The [CSG](page.php?p=5822) class



##Members

###matrix : [Matrix](page.php?p=5811)



The matrix


###position : [Vector3](page.php?p=5808)



The position


###rotation : [Vector3](page.php?p=5808)



The rotation


###scaling : [Vector3](page.php?p=5808)



The scaling







##Methods

###static FromMesh(mesh) &rarr; [CSG](page.php?p=5822)
Convert [BABYLON](page.php?p=5696).Mesh to [BABYLON](page.php?p=5696).CSG



####Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [Mesh](page.php?p=5722) | @param mesh
---

###clone() &rarr; [CSG](page.php?p=5822)
Clone this [CSG](page.php?p=5822)




###union(csg) &rarr; [CSG](page.php?p=5822)
Union the [CSG](page.php?p=5822)



####Parameters
 | Name | Type | Description
---|---|---|---
 | csg | [CSG](page.php?p=5822) | using this [CSG](page.php?p=5822)
---

###unionInPlace(csg) &rarr; void
Union in place



####Parameters
 | Name | Type | Description
---|---|---|---
 | csg | [CSG](page.php?p=5822) | @param csg
---

###subtract(csg) &rarr; [CSG](page.php?p=5822)
Subtract the [CSG](page.php?p=5822)



####Parameters
 | Name | Type | Description
---|---|---|---
 | csg | [CSG](page.php?p=5822) | using this [CSG](page.php?p=5822)
---

###subtractInPlace(csg) &rarr; void
Subtract in place



####Parameters
 | Name | Type | Description
---|---|---|---
 | csg | [CSG](page.php?p=5822) | @param csg
---

###intersect(csg) &rarr; [CSG](page.php?p=5822)
Intersect first solid with the second



####Parameters
 | Name | Type | Description
---|---|---|---
 | csg | [CSG](page.php?p=5822) | @param csg
---

###intersectInPlace(csg) &rarr; void
Intersect in place



####Parameters
 | Name | Type | Description
---|---|---|---
 | csg | [CSG](page.php?p=5822) | @param csg
---

###inverse() &rarr; [CSG](page.php?p=5822)
Return a new [BABYLON](page.php?p=5696).CSG solid with solid and empty space swtiched. This solid is not modified.




###inverseInPlace() &rarr; void
Inverse in place




###copyTransformAttributes(csg) &rarr; [CSG](page.php?p=5822)
This is used to keep meshes transformations so they can be restored
when we build back a [BABYLON](page.php?p=5696).Mesh
NB : All [CSG](page.php?p=5822) operations are performed in world coordinates



####Parameters
 | Name | Type | Description
---|---|---|---
 | csg | [CSG](page.php?p=5822) | @param csg
---

###buildMeshGeometry(name, scene, keepSubMeshes) &rarr; [Mesh](page.php?p=5722)
Build raw mesh from [CSG](page.php?p=5822)
Coordinates here are in world space



####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | @param name
 | scene | [Scene](page.php?p=5725) | @param scene
 | keepSubMeshes | boolean | @param keepSubMeshes
---

###toMesh(name, material, scene, keepSubMeshes) &rarr; [Mesh](page.php?p=5722)

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | @param name
 | material | [Material](page.php?p=5783) | @param material
 | scene | [Scene](page.php?p=5725) | @param scene
 | keepSubMeshes | boolean | @param keepSubMeshes
---
