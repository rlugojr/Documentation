---
ID_PAGE: 3273
PG_TITLE: LinesMesh
PG_VERSION: 1.14
---

The [LinesMesh](page.php?p=3273) class
##new [LinesMesh](page.php?p=3273)(name, scene, updatable)

The [LinesMesh](page.php?p=3273) constructor
####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | @param name
 | scene | [Scene](page.php?p=3274) | The scene where the [LinesMesh](page.php?p=3273) is
optional | updatable | boolean | @param updatable
---

##Extends [Mesh](page.php?p=3271)
##Members

###color : [Color3](page.php?p=3324)


The color of the lines [Mesh](page.php?p=3271)

###alpha : number


The alpha

###material : [Material](page.php?p=3312)


The material of the Lines [Mesh](page.php?p=3271)

###isPickable : boolean


true if is Packable, false otherwise

###checkCollisions : boolean


True if the mesh has collision, false otherwise



##Methods

###intersects(ray, fastCheck) &rarr; any
Intersects
if false, infinite ray !

####Parameters
 | Name | Type | Description
---|---|---|---
 | ray | [Ray](page.php?p=3333) | The ray
optional | fastCheck | boolean | if true, stop at the first result
---

###dispose(doNotRecurse) &rarr; void
Dispose the [LinesMesh](page.php?p=3273)

####Parameters
 | Name | Type | Description
---|---|---|---
optional | doNotRecurse | boolean | @param doNotRecurse
---
