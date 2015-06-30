---
ID_PAGE: 3402
PG_TITLE: Plane
PG_VERSION: 1.14
---
##new [Plane](page.php?p=3330)(id, scene, size, canBeRegenerated, mesh)

The plane constructor
####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | @param id
 | scene | [Scene](page.php?p=3274) | The scene where the plane is
 | size | number | The size of the plane
optional | canBeRegenerated | boolean | @param canBeRegenerated
optional | mesh | [Mesh](page.php?p=3271) | @param mesh
---

##Extends [_Primitive](page.php?p=3395)
##Members

###size : number


The size of the plane



##Methods

###copy(id) &rarr; [Geometry](page.php?p=3336)
Copy the geometry object with this new id

####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | This new id, for new object
---
