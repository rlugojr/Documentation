---
ID_PAGE: 6783
PG_TITLE: SubMesh
PG_VERSION: 2.1
TAGS:
    - Mesh
---

Create a new [SubMesh](page.php?p=6783)
##new [SubMesh](page.php?p=6783)(materialIndex, verticesStart, verticesCount, indexStart, indexCount, mesh, renderingMesh, createBoundingBox)



 [SubMesh](page.php?p=6783) constructor




####Parameters
 | Name | Type | Description
---|---|---|---
 | materialIndex | number | The index of the material to use (this index is used to find the correct material Inside the subMaterials collection of a multi-material)
 | verticesStart | number | 
 | verticesCount | number | The count of vertices used
 | indexStart | any | Index of the first indice to use
 | indexCount | number | indices count
 | mesh | [AbstractMesh](page.php?p=6657) | The parent mesh
optional | renderingMesh | [Mesh](page.php?p=6659) | @param renderingMesh
optional | createBoundingBox | boolean | @param createBoundingBox
---

##Members

###materialIndex : number




The material Index



###verticesStart : number




The vertice sStart



###verticesCount : number




The vertices Count



###indexStart : any




The index Start



###indexCount : number




The index Count



###linesIndexCount : number




The lines Index Count











##Methods

###getBoundingInfo() &rarr; [BoundingInfo](page.php?p=6714)
Get bounding info






###getMesh() &rarr; [AbstractMesh](page.php?p=6657)
Get mesh






###getRenderingMesh() &rarr; [Mesh](page.php?p=6659)
Get rendering mesh






###getMaterial() &rarr; [Material](page.php?p=6726)
Get material






###refreshBoundingInfo() &rarr; void
Refresh bounding info






###updateBoundingInfo(world) &rarr; void
Update bounding info





####Parameters
 | Name | Type | Description
---|---|---|---
 | world | [Matrix](page.php?p=6754) | @param world
---

###isInFrustum(frustumPlanes) &rarr; boolean
Return true if it is frustum





####Parameters
 | Name | Type | Description
---|---|---|---
 | frustumPlanes | [Plane](page.php?p=6755)[] | @param frustumPlanes
---

###render() &rarr; void
The render






###getLinesIndexBuffer(indices, engine) &rarr; WebGLBuffer
Get lines index buffer





####Parameters
 | Name | Type | Description
---|---|---|---
 | indices | number[] | @param indices
 | engine | any | @param engine
---

###canIntersects(ray) &rarr; boolean
Can Intersects





####Parameters
 | Name | Type | Description
---|---|---|---
 | ray | [Ray](page.php?p=6758) | The ray
---

###intersects(ray, positions, indices, fastCheck) &rarr; [IntersectionInfo](page.php?p=6711)
Intersects





####Parameters
 | Name | Type | Description
---|---|---|---
 | ray | [Ray](page.php?p=6758) | The ray
 | positions | [Vector3](page.php?p=6751)[] | @param positions
 | indices | number[] | @param indices
optional | fastCheck | boolean | @param fastCheck
---

###clone(newMesh, newRenderingMesh) &rarr; [SubMesh](page.php?p=6783)
Create a clone of the subMesh





####Parameters
 | Name | Type | Description
---|---|---|---
 | newMesh | [AbstractMesh](page.php?p=6657) | @param newMesh
optional | newRenderingMesh | [Mesh](page.php?p=6659) | @param newRenderingMesh
---

###dispose() &rarr; void
Dispose






###static CreateFromIndices(materialIndex, startIndex, indexCount, mesh, renderingMesh) &rarr; [SubMesh](page.php?p=6783)

####Parameters
 | Name | Type | Description
---|---|---|---
 | materialIndex | number | The index of the material to use (this index is used to find the correct material Inside the subMaterials collection of a multi-material)
 | startIndex | number | Index of the first indice to use
 | indexCount | number | The indices count
 | mesh | [AbstractMesh](page.php?p=6657) | @param mesh
optional | renderingMesh | [Mesh](page.php?p=6659) | If defined, is used instead of the mesh parameter.
---
