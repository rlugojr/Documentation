---
ID_PAGE: 3400
PG_TITLE: Ground
PG_VERSION: 1.14
---
##new [Ground](page.php?p=3400)(id, scene, width, height, subdivisions, canBeRegenerated, mesh)

The ground constructor
####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | @param id
 | scene | [Scene](page.php?p=3274) | The scene where the cylinder is
 | width | number | The width of the ground
 | height | number | The height of the ground
 | subdivisions | number | The subdivisions of the ground
optional | canBeRegenerated | boolean | @param canBeRegenerated
optional | mesh | [Mesh](page.php?p=3271) | @param mesh
---

##Extends [_Primitive](page.php?p=3395)
##Members

###width : number


The width of the ground

###height : number


the height of the ground

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
