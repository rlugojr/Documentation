---
ID_PAGE: 5916
PG_TITLE: TorusKnot
PG_VERSION: 2.0
---
##new [TorusKnot](page.php?p=5916)(id, scene, radius, tube, radialSegments, tubularSegments, p, q, canBeRegenerated, mesh)


The torusknot constructor


####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | @param id
 | scene | [Scene](page.php?p=5725) | The scene where the torusknot is
 | radius | number | The radius of the torusknot
 | tube | number | @param tube
 | radialSegments | number | @param radialSegments
 | tubularSegments | number | @param tubularSegments
 | p | number | @param p
 | q | number | @param q
optional | canBeRegenerated | boolean | @param canBeRegenerated
optional | mesh | [Mesh](page.php?p=5722) | @param mesh
---

##Extends [_Primitive](page.php?p=5908)
##Members

###radius : number



The radius of the [TorusKnot](page.php?p=5916)


###tube : number




###radialSegments : number




###tubularSegments : number




###p : number



Describes up-and-down (P) winding numbers


###q : number



around-the-center (Q) winding numbers







##Methods

###copy(id) &rarr; [Geometry](page.php?p=5823)

####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | This new id, for new object
---
