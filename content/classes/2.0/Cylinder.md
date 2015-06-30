---
ID_PAGE: 5911
PG_TITLE: Cylinder
PG_VERSION: 2.0
---

The [Cylinder](page.php?p=5911) Class
##new [Cylinder](page.php?p=5911)(id, scene, height, diameterTop, diameterBottom, tessellation, subdivisions, canBeRegenerated, mesh)


The [Cylinder](page.php?p=5911) constructor


####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | @param id
 | scene | [Scene](page.php?p=5725) | The scene where the cylinder is
 | height | number | The height of the cylinder
 | diameterTop | number | The top circle diameter
 | diameterBottom | number | The bottom circle diameter
 | tessellation | number | The tessellation
optional | subdivisions | number | The subdivisions
optional | canBeRegenerated | boolean | @param canBeRegenerated
optional | mesh | [Mesh](page.php?p=5722) | @param mesh
---

##Extends [_Primitive](page.php?p=5908)
##Members

###height : number



the height of the cylinder


###diameterTop : number



The diameter of the top circle


###diameterBottom : number



The diameter of the bottom circle


###tessellation : number



The tessellation of the [Torus](page.php?p=5912)


###subdivisions : number



The number of subdivisions







##Methods

###copy(id) &rarr; [Geometry](page.php?p=5823)

####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | This new id, for new object
---
