---
ID_PAGE: 3398
PG_TITLE: Cylinder
PG_VERSION: 1.14
---

The [Cylinder](page.php?p=3398) Class
##new [Cylinder](page.php?p=3398)(id, scene, height, diameterTop, diameterBottom, tessellation, subdivisions, canBeRegenerated, mesh)

The [Cylinder](page.php?p=3398) constructor
####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | @param id
 | scene | [Scene](page.php?p=3274) | The scene where the cylinder is
 | height | number | The height of the cylinder
 | diameterTop | number | The top circle diameter
 | diameterBottom | number | The bottom circle diameter
 | tessellation | number | The tessellation
optional | subdivisions | number | The subdivisions
optional | canBeRegenerated | boolean | @param canBeRegenerated
optional | mesh | [Mesh](page.php?p=3271) | @param mesh
---

##Extends [_Primitive](page.php?p=3395)
##Members

###height : number


the height of the cylinder

###diameterTop : number


The diameter of the top circle

###diameterBottom : number


The diameter of the bottom circle

###tessellation : number


The tessellation of the [Torus](page.php?p=3399)

###subdivisions : number


The number of subdivisions



##Methods

###copy(id) &rarr; [Geometry](page.php?p=3336)
Copy the geometry object with this new id

####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | This new id, for new object
---
