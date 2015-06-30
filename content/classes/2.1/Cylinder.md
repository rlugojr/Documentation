---
ID_PAGE: 6868
PG_TITLE: Cylinder
PG_VERSION: 2.1
---

The [Cylinder](page.php?p=6868) Class
##new [Cylinder](page.php?p=6868)(id, scene, height, diameterTop, diameterBottom, tessellation, subdivisions, canBeRegenerated, mesh, side)



The [Cylinder](page.php?p=6868) constructor




####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | @param id
 | scene | [Scene](page.php?p=6662) | The scene where the cylinder is
 | height | number | The height of the cylinder
 | diameterTop | number | The top circle diameter
 | diameterBottom | number | The bottom circle diameter
 | tessellation | number | The tessellation
optional | subdivisions | number | The subdivisions
optional | canBeRegenerated | boolean | @param canBeRegenerated
optional | mesh | [Mesh](page.php?p=6659) | @param mesh
optional | side | number | 
---

##Extends [_Primitive](page.php?p=6864)
##Members

###height : number




the height of the cylinder



###diameterTop : number




The diameter of the top circle



###diameterBottom : number




The diameter of the bottom circle



###tessellation : number




The tessellation of the [Torus](page.php?p=6869)



###subdivisions : number




The number of subdivisions









###side : number




##Methods

###copy(id) &rarr; [Geometry](page.php?p=6771)

####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | This new id, for new object
---
