---
ID_PAGE: 25261
PG_TITLE: VertexData
PG_VERSION: 2.1
---
##Description

class [VertexData](/classes/2.2-alpha/VertexData)



##Members

###positions : number[]

The [VertexData](/classes/2.2-alpha/VertexData) position

###normals : number[]

The [VertexData](/classes/2.2-alpha/VertexData) normals

###uvs : number[]

The [VertexData](/classes/2.2-alpha/VertexData) uvs

###uvs2 : number[]



###uvs3 : number[]



###uvs4 : number[]



###uvs5 : number[]



###uvs6 : number[]



###colors : number[]

The [VertexData](/classes/2.2-alpha/VertexData) colors

###matricesIndices : number[]

The [VertexData](/classes/2.2-alpha/VertexData) matricesIndices

###matricesWeights : number[]

The [VertexData](/classes/2.2-alpha/VertexData) matricesWeights

###indices : number[]

The [VertexData](/classes/2.2-alpha/VertexData) indices

##Methods

###set(data, kind) &rarr; void

Set the vertex data

####Parameters
 | Name | Type | Description
---|---|---|---
 | data | number[] | 
 | kind | string | 

###applyToMesh(mesh, updatable) &rarr; void

Apply To mesh

####Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [Mesh](/classes/2.2-alpha/Mesh) | 
optional | updatable | boolean | 

###applyToGeometry(geometry, updatable) &rarr; void

Apply to [Geometry](/classes/2.2-alpha/Geometry)

####Parameters
 | Name | Type | Description
---|---|---|---
 | geometry | [Geometry](/classes/2.2-alpha/Geometry) | 
optional | updatable | boolean | 

###updateMesh(mesh, updateExtends, makeItUnique) &rarr; void

Update [Mesh](/classes/2.2-alpha/Mesh)

####Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [Mesh](/classes/2.2-alpha/Mesh) | 
optional | updateExtends | boolean | 
optional | makeItUnique | boolean | 

###updateGeometry(geometry, updateExtends, makeItUnique) &rarr; void

Update

####Parameters
 | Name | Type | Description
---|---|---|---
 | geometry | [Geometry](/classes/2.2-alpha/Geometry) | 
optional | updateExtends | boolean | 
optional | makeItUnique | boolean | 

###transform(matrix) &rarr; void

Transform his vertexdata with the given matri

####Parameters
 | Name | Type | Description
---|---|---|---
 | matrix | [Matrix](/classes/2.2-alpha/Matrix) | 

###merge(other) &rarr; void

Merge this vertex data with the one given in parameter

####Parameters
 | Name | Type | Description
---|---|---|---
 | other | [VertexData](/classes/2.2-alpha/VertexData) | 

###static ExtractFromMesh(mesh, copyWhenShared) &rarr; [VertexData](/classes/2.2-alpha/VertexData)

Creates a new VertexDataObject with values extracted of the given mesh

####Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [Mesh](/classes/2.2-alpha/Mesh) | 
optional | copyWhenShared | boolean | 

###static ExtractFromGeometry(geometry, copyWhenShared) &rarr; [VertexData](/classes/2.2-alpha/VertexData)

Creates a new VertexDataObject with values extracted of the given geometry

####Parameters
 | Name | Type | Description
---|---|---|---
 | geometry | [Geometry](/classes/2.2-alpha/Geometry) | 
optional | copyWhenShared | boolean | 

###static CreateRibbon(pathArray, closeArray, closePath, offset, sideOrientation) &rarr; [VertexData](/classes/2.2-alpha/VertexData)



####Parameters
 | Name | Type | Description
---|---|---|---
 | pathArray | [Vector3](/classes/2.2-alpha/Vector3)[][] | 
 | closeArray | boolean | 
 | closePath | boolean | 
 | offset | number | 
optional | sideOrientation | number | 

###static CreateBox(size, sideOrientation) &rarr; [VertexData](/classes/2.2-alpha/VertexData)

Creates a new [VertexData](/classes/2.2-alpha/VertexData) object of a box of the given size

####Parameters
 | Name | Type | Description
---|---|---|---
 | size | number | 
optional | sideOrientation | number | 

###static CreateSphere(segments, diameter, sideOrientation) &rarr; [VertexData](/classes/2.2-alpha/VertexData)

Creates a new [VertexData](/classes/2.2-alpha/VertexData) object of a sphere of the given diameter

####Parameters
 | Name | Type | Description
---|---|---|---
 | segments | number | 
 | diameter | number | 
optional | sideOrientation | number | 

###static CreateCylinder(height, diameterTop, diameterBottom, tessellation, subdivisions, sideOrientation) &rarr; [VertexData](/classes/2.2-alpha/VertexData)

Creates a new [VertexData](/classes/2.2-alpha/VertexData) object of a cylinder of the given parameters

####Parameters
 | Name | Type | Description
---|---|---|---
 | height | number | 
 | diameterTop | number | 
 | diameterBottom | number | 
 | tessellation | number | 
optional | subdivisions | number | 
optional | sideOrientation | number | 

###static CreateTorus(diameter, thickness, tessellation, sideOrientation) &rarr; [VertexData](/classes/2.2-alpha/VertexData)

Creates a new [VertexData](/classes/2.2-alpha/VertexData) object of a torus of the given parameters

####Parameters
 | Name | Type | Description
---|---|---|---
 | diameter | any | 
 | thickness | any | 
 | tessellation | any | 
optional | sideOrientation | number | 

###static CreateLines(points) &rarr; [VertexData](/classes/2.2-alpha/VertexData)

Creates a new [VertexData](/classes/2.2-alpha/VertexData) object of a ground of the given parameters

####Parameters
 | Name | Type | Description
---|---|---|---
 | points | [Vector3](/classes/2.2-alpha/Vector3)[] | 

###static CreateDashedLines(points, dashSize, gapSize, dashNb) &rarr; [VertexData](/classes/2.2-alpha/VertexData)



####Parameters
 | Name | Type | Description
---|---|---|---
 | points | [Vector3](/classes/2.2-alpha/Vector3)[] | 
 | dashSize | number | 
 | gapSize | number | 
 | dashNb | number | 

###static CreateGround(width, height, subdivisions) &rarr; [VertexData](/classes/2.2-alpha/VertexData)

Creates a new [VertexData](/classes/2.2-alpha/VertexData) object of a ground of the given parameters

####Parameters
 | Name | Type | Description
---|---|---|---
 | width | number | 
 | height | number | 
 | subdivisions | number | 

###static CreateTiledGround(xmin, zmin, xmax, zmax, subdivisions, precision) &rarr; [VertexData](/classes/2.2-alpha/VertexData)

; 
Create a new [VertexData](/classes/2.2-alpha/VertexData) object of a [TiledGround](/classes/2.2-alpha/TiledGround) with the given properties

####Parameters
 | Name | Type | Description
---|---|---|---
 | xmin | number | 
 | zmin | number | 
 | xmax | number | 
 | zmax | number | 
optional | subdivisions | { w: number,  h: number } | 
optional | precision | { w: number,  h: number } | 

###static CreateGroundFromHeightMap(width, height, subdivisions, minHeight, maxHeight, buffer, bufferWidth, bufferHeight) &rarr; [VertexData](/classes/2.2-alpha/VertexData)

Creates a new [VertexData](/classes/2.2-alpha/VertexData) object of a huge ground of the given parameters

####Parameters
 | Name | Type | Description
---|---|---|---
 | width | number | 
 | height | number | 
 | subdivisions | number | 
 | minHeight | number | 
 | maxHeight | number | 
 | buffer | Uint8Array | 
 | bufferWidth | number | 
 | bufferHeight | number | 

###static CreatePlane(size, sideOrientation) &rarr; [VertexData](/classes/2.2-alpha/VertexData)

Creates a new [VertexData](/classes/2.2-alpha/VertexData) object of a plane of the given parameters

####Parameters
 | Name | Type | Description
---|---|---|---
 | size | number | 
optional | sideOrientation | number | 

###static CreateDisc(radius, tessellation, sideOrientation) &rarr; [VertexData](/classes/2.2-alpha/VertexData)



####Parameters
 | Name | Type | Description
---|---|---|---
 | radius | number | 
 | tessellation | number | 
optional | sideOrientation | number | 

###static CreateTorusKnot(radius, tube, radialSegments, tubularSegments, p, q, sideOrientation) &rarr; [VertexData](/classes/2.2-alpha/VertexData)

Creates a new [VertexData](/classes/2.2-alpha/VertexData) object of a torus knot of the given parameters. &lt;br/&gt;
Based on &lt;a href=&quot;http://code.google.com/p/away3d/source/browse/trunk/fp10/Away3D/src/away3d/primitives/[TorusKnot](/classes/2.2-alpha/TorusKnot).as?spec=svn2473&amp;r=2473&quot;&gt;http://code.google.com/p/away3d/source/browse/trunk/fp10/Away3D/src/away3d/primitives/[TorusKnot](/classes/2.2-alpha/TorusKnot).as?spec=svn2473&amp;r=2473&lt;/a&gt;

####Parameters
 | Name | Type | Description
---|---|---|---
 | radius | number | 
 | tube | number | 
 | radialSegments | number | 
 | tubularSegments | number | 
 | p | number | 
 | q | number | 
optional | sideOrientation | number | 

###static ComputeNormals(positions, indices, normals) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | positions | any | 
 | indices | any | 
 | normals | any | 

