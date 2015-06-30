---
ID_PAGE: 3399
PG_TITLE: Torus
PG_VERSION: 1.14
---

The [Torus](page.php?p=3399) Class
##new [Torus](page.php?p=3399)(id, scene, diameter, thickness, tessellation, canBeRegenerated, mesh)

The [Torus](page.php?p=3399) constructor
####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | @param id
 | scene | [Scene](page.php?p=3274) | The scene where the torus is
 | diameter | number | The diameter of the torus
 | thickness | number | The thickness of the torus
 | tessellation | number | The tessellation of the torus
optional | canBeRegenerated | boolean | @param canBeRegenerated
optional | mesh | [Mesh](page.php?p=3271) | @param mesh
---

##Extends [_Primitive](page.php?p=3395)
##Members

###diameter : number


The diameter if the [Torus](page.php?p=3399)

###thickness : number


the thickness of the [Torus](page.php?p=3399)

###tessellation : number


The tessellation of the [Torus](page.php?p=3399)



##Methods

###copy(id) &rarr; [Geometry](page.php?p=3336)
Copy the geometry object with this new id

####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | This new id, for new object
---
