---
ID_PAGE: 5825
PG_TITLE: VertexData
PG_VERSION: 2.0
---

The [VertexData](page.php?p=5825) Class



##Members

###positions : number[]



The [VertexData](page.php?p=5825) position


###normals : number[]



The [VertexData](page.php?p=5825) normals


###uvs : number[]



The [VertexData](page.php?p=5825) uvs


###uv2s : number[]



The [VertexData](page.php?p=5825) uvs2


###colors : number[]



The [VertexData](page.php?p=5825) colors


###matricesIndices : number[]



The [VertexData](page.php?p=5825) matricesIndices


###matricesWeights : number[]



The [VertexData](page.php?p=5825) matricesWeights


###indices : number[]



The [VertexData](page.php?p=5825) indices







##Methods

###set(data, kind) &rarr; void
Set the vertex data



####Parameters
 | Name | Type | Description
---|---|---|---
 | data | number[] | @param data
 | kind | string | @param kind
---

###applyToMesh(mesh, updatable) &rarr; void
Apply To mesh



####Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [Mesh](page.php?p=5722) | The mesh
optional | updatable | boolean | @param updatable
---

###applyToGeometry(geometry, updatable) &rarr; void
Apply to [Geometry](page.php?p=5823)



####Parameters
 | Name | Type | Description
---|---|---|---
 | geometry | [Geometry](page.php?p=5823) | @param geometry
optional | updatable | boolean | @param updatable
---

###updateMesh(mesh, updateExtends, makeItUnique) &rarr; void
Update [Mesh](page.php?p=5722)



####Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [Mesh](page.php?p=5722) | This mesh
optional | updateExtends | boolean | Not used here
optional | makeItUnique | boolean | Not used here
---

###updateGeometry(geometry, updateExtends, makeItUnique) &rarr; void
Update



####Parameters
 | Name | Type | Description
---|---|---|---
 | geometry | [Geometry](page.php?p=5823) | @param geometry
optional | updateExtends | boolean | Not used here
optional | makeItUnique | boolean | Not used here
---

###transform(matrix) &rarr; void
Transform his vertexdata with the given matri



####Parameters
 | Name | Type | Description
---|---|---|---
 | matrix | [Matrix](page.php?p=5811) | @param matrix
---

###merge(other) &rarr; void
Merge this vertex data with the one given in parameter



####Parameters
 | Name | Type | Description
---|---|---|---
 | other | [VertexData](page.php?p=5825) | @param other
---

###static ExtractFromMesh(mesh) &rarr; [VertexData](page.php?p=5825)
Creates a new VertexDataObject with values extracted of the given mesh



####Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [Mesh](page.php?p=5722) | @param mesh
---

###static ExtractFromGeometry(geometry) &rarr; [VertexData](page.php?p=5825)
Creates a new VertexDataObject with values extracted of the given geometry



####Parameters
 | Name | Type | Description
---|---|---|---
 | geometry | [Geometry](page.php?p=5823) | @param geometry
---

###static CreateBox(size) &rarr; [VertexData](page.php?p=5825)
Creates a new [VertexData](page.php?p=5825) object of a box of the given size



####Parameters
 | Name | Type | Description
---|---|---|---
 | size | number | The size of the box
---

###static CreateSphere(segments, diameter) &rarr; [VertexData](page.php?p=5825)
Creates a new [VertexData](page.php?p=5825) object of a sphere of the given diameter



####Parameters
 | Name | Type | Description
---|---|---|---
 | segments | number | The number of segments of the result sphere
 | diameter | number | The diameter of the sphere
---

###static CreateCylinder(height, diameterTop, diameterBottom, tessellation, subdivisions) &rarr; [VertexData](page.php?p=5825)
Creates a new [VertexData](page.php?p=5825) object of a cylinder of the given parameters



####Parameters
 | Name | Type | Description
---|---|---|---
 | height | number | The height of the cylinder
 | diameterTop | number | Diameter at top of the cylinder
 | diameterBottom | number | Diameter at bottom of the cylinder
 | tessellation | number | The tessellation of the cylinder
optional | subdivisions | number | the subdivisions of the cylinder
---

###static CreateTorus(diameter, thickness, tessellation) &rarr; [VertexData](page.php?p=5825)
Creates a new [VertexData](page.php?p=5825) object of a torus of the given parameters



####Parameters
 | Name | Type | Description
---|---|---|---
 | diameter | any | The diameter of the [Torus](page.php?p=5912)
 | thickness | any | The thickness of the [Torus](page.php?p=5912)
 | tessellation | any | The tessellation of the [Torus](page.php?p=5912)
---

###static CreateLines(points) &rarr; [VertexData](page.php?p=5825)
Creates a new [VertexData](page.php?p=5825) object of a ground of the given parameters



####Parameters
 | Name | Type | Description
---|---|---|---
 | points | [Vector3](page.php?p=5808)[] | The points of the Line
---

###static CreateGround(width, height, subdivisions) &rarr; [VertexData](page.php?p=5825)
Creates a new [VertexData](page.php?p=5825) object of a ground of the given parameters



####Parameters
 | Name | Type | Description
---|---|---|---
 | width | number | The width of the ground
 | height | number | The height of the ground
 | subdivisions | number | The subdivisions of the ground
---

###static CreateTiledGround(xmin, zmin, xmax, zmax, subdivisions, precision) &rarr; [VertexData](page.php?p=5825); 
Create a new [VertexData](page.php?p=5825) object of a [TiledGround](page.php?p=5914) with the given properties



####Parameters
 | Name | Type | Description
---|---|---|---
 | xmin | number | The xmin of the [Ground](page.php?p=5913)
 | zmin | number | The zmin of the [Ground](page.php?p=5913)
 | xmax | number | The xmax of the [Ground](page.php?p=5913)
 | zmax | number | The zmax of the [Ground](page.php?p=5913)
optional | subdivisions | {w: number; h: number; } | The number of tiles (subdivisions.w : in width; subdivisions.h : in height)
optional | precision | { w: number; h: number; } | The number of subdivisions in each tile (precision.w : in width; precision.h : in height)
---

###static CreateGroundFromHeightMap(width, height, subdivisions, minHeight, maxHeight, buffer, bufferWidth, bufferHeight) &rarr; [VertexData](page.php?p=5825)
Creates a new [VertexData](page.php?p=5825) object of a huge ground of the given parameters



####Parameters
 | Name | Type | Description
---|---|---|---
 | width | number | The width of the GroundFromHeightMap
 | height | number | The width of the GroundFromHeightMap
 | subdivisions | number | The number of subdivisions in the GroundFromHeightMap
 | minHeight | number | The minimum Height of the new GFHM
 | maxHeight | number | The maximum height of the Height map
 | buffer | Uint8Array | @param buffer
 | bufferWidth | number | @param bufferWidth
 | bufferHeight | number | @param bufferHeight
---

###static CreatePlane(size) &rarr; [VertexData](page.php?p=5825)
Creates a new [VertexData](page.php?p=5825) object of a plane of the given parameters



####Parameters
 | Name | Type | Description
---|---|---|---
 | size | number | the size of the plane
---

###static CreateTorusKnot(radius, tube, radialSegments, tubularSegments, p, q) &rarr; [VertexData](page.php?p=5825)
Creates a new [VertexData](page.php?p=5825) object of a torus knot of the given parameters. &lt;br/&gt;
Based on &lt;a href=&quot;http://code.google.com/p/away3d/source/browse/trunk/fp10/Away3D/src/away3d/primitives/TorusKnot.as?spec=svn2473&amp;r=2473&quot;&gt;http://code.google.com/p/away3d/source/browse/trunk/fp10/Away3D/src/away3d/primitives/TorusKnot.as?spec=svn2473&amp;r=2473&lt;/a&gt;



####Parameters
 | Name | Type | Description
---|---|---|---
 | radius | number | The radius of the [TorusKnot](page.php?p=5916)
 | tube | number | @param tube
 | radialSegments | number | @param radialSegments
 | tubularSegments | number | @param tubularSegments
 | p | number | Describes up-and-down (P) winding numbers
 | q | number | Describes around-the-center (Q) winding numbers
---

###static ComputeNormals(positions, indices, normals) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | positions | number[] | @param positions
 | indices | number[] | @param indices
 | normals | number[] | @param normals
---
