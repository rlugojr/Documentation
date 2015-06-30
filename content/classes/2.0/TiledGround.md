---
ID_PAGE: 5914
PG_TITLE: TiledGround
PG_VERSION: 2.0
---
##new [TiledGround](page.php?p=5914)(id, scene, xmin, zmin, xmax, zmax, subdivisions, precision, canBeRegenerated, mesh)


The tiledground constructor


####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | @param id
 | scene | [Scene](page.php?p=5725) | The scene where the cylinder is
 | xmin | number | The x min of the tiledground
 | zmin | number | The z min of the tiledground
 | xmax | number | The x max of the tiledground
 | zmax | number | The z max of the tiledground
 | subdivisions | {w: number; h: number; } | The subdivision of the tiledground
 | precision | { w: number; h: number; } | The precision
optional | canBeRegenerated | boolean | @param canBeRegenerated
optional | mesh | [Mesh](page.php?p=5722) | @param mesh
---

##Extends [_Primitive](page.php?p=5908)
##Members

###xmin : number



The beginning of the [TiledGround](page.php?p=5914) on the x axis

extent values


###zmin : number



The beginning of the [TiledGround](page.php?p=5914) on the z axis

extent values


###xmax : number



The end of the [TiledGround](page.php?p=5914) on the x axis

extent values


###zmax : number



The end of the [TiledGround](page.php?p=5914) on the z axis

extent values


###subdivisions : {w: number; h: number; }



The number of tiles (subdivisions.w : in width; subdivisions.h : in height)


###precision : {w: number; h: number; }



The number of subdivisions in each tile (precision.w : in width; precision.h : in height)







##Methods

###copy(id) &rarr; [Geometry](page.php?p=5823)

####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | This new id, for new object
---
