---
ID_PAGE: 6873
PG_TITLE: TorusKnot
PG_VERSION: 2.1
TAGS:
    - Geometry
---
##new [TorusKnot](page.php?p=6873)(id, scene, radius, tube, radialSegments, tubularSegments, p, q, canBeRegenerated, mesh, side)



The torusknot constructor




####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | @param id
 | scene | [Scene](page.php?p=6662) | The scene where the torusknot is
 | radius | number | The radius of the torusknot
 | tube | number | @param tube
 | radialSegments | number | @param radialSegments
 | tubularSegments | number | @param tubularSegments
 | p | number | @param p
 | q | number | @param q
optional | canBeRegenerated | boolean | @param canBeRegenerated
optional | mesh | [Mesh](page.php?p=6659) | @param mesh
optional | side | number | 
---

##Extends
 [_Primitive](page.php?p=6864)
##Members

###radius : number




The radius of the [TorusKnot](page.php?p=6873)



###tube : number






###radialSegments : number






###tubularSegments : number






###p : number




Describes up-and-down (P) winding numbers



###q : number




around-the-center (Q) winding numbers









###side : number




##Methods

###copy(id) &rarr; [Geometry](page.php?p=6771)

####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | This new id, for new object
---
