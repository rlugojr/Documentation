---
ID_PAGE: 6770
PG_TITLE: CSG
PG_VERSION: 2.1
---

The [CSG](page.php?p=6770) class





##Members

###matrix : [Matrix](page.php?p=6754)




The matrix



###position : [Vector3](page.php?p=6751)




The position



###rotation : [Vector3](page.php?p=6751)




The rotation



###rotationQuaternion : [Quaternion](page.php?p=6753)


###scaling : [Vector3](page.php?p=6751)




The scaling











##Methods

###static FromMesh(mesh) &rarr; [CSG](page.php?p=6770)
Convert [BABYLON](page.php?p=6625).Mesh to [BABYLON](page.php?p=6625).CSG





####Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [Mesh](page.php?p=6659) | @param mesh
---

###clone() &rarr; [CSG](page.php?p=6770)
Clone this [CSG](page.php?p=6770)






###union(csg) &rarr; [CSG](page.php?p=6770)
Union the [CSG](page.php?p=6770)





####Parameters
 | Name | Type | Description
---|---|---|---
 | csg | [CSG](page.php?p=6770) | using this [CSG](page.php?p=6770)
---

###unionInPlace(csg) &rarr; void
Union in place





####Parameters
 | Name | Type | Description
---|---|---|---
 | csg | [CSG](page.php?p=6770) | @param csg
---

###subtract(csg) &rarr; [CSG](page.php?p=6770)
Subtract the [CSG](page.php?p=6770)





####Parameters
 | Name | Type | Description
---|---|---|---
 | csg | [CSG](page.php?p=6770) | using this [CSG](page.php?p=6770)
---

###subtractInPlace(csg) &rarr; void
Subtract in place





####Parameters
 | Name | Type | Description
---|---|---|---
 | csg | [CSG](page.php?p=6770) | @param csg
---

###intersect(csg) &rarr; [CSG](page.php?p=6770)
Intersect first solid with the second





####Parameters
 | Name | Type | Description
---|---|---|---
 | csg | [CSG](page.php?p=6770) | @param csg
---

###intersectInPlace(csg) &rarr; void
Intersect in place





####Parameters
 | Name | Type | Description
---|---|---|---
 | csg | [CSG](page.php?p=6770) | @param csg
---

###inverse() &rarr; [CSG](page.php?p=6770)
Return a new [BABYLON](page.php?p=6625).CSG solid with solid and empty space swtiched. This solid is not modified.






###inverseInPlace() &rarr; void
Inverse in place






###copyTransformAttributes(csg) &rarr; [CSG](page.php?p=6770)
This is used to keep meshes transformations so they can be restored
when we build back a [BABYLON](page.php?p=6625).Mesh
NB : All [CSG](page.php?p=6770) operations are performed in world coordinates





####Parameters
 | Name | Type | Description
---|---|---|---
 | csg | [CSG](page.php?p=6770) | @param csg
---

###buildMeshGeometry(name, scene, keepSubMeshes) &rarr; [Mesh](page.php?p=6659)
Build raw mesh from [CSG](page.php?p=6770)
Coordinates here are in world space





####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | @param name
 | scene | [Scene](page.php?p=6662) | @param scene
 | keepSubMeshes | boolean | @param keepSubMeshes
---

###toMesh(name, material, scene, keepSubMeshes) &rarr; [Mesh](page.php?p=6659)

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | @param name
 | material | [Material](page.php?p=6726) | @param material
 | scene | [Scene](page.php?p=6662) | @param scene
 | keepSubMeshes | boolean | @param keepSubMeshes
---
