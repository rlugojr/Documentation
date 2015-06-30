---
ID_PAGE: 5724
PG_TITLE: LinesMesh
PG_VERSION: 2.0
---

The [LinesMesh](page.php?p=5724) class
##new [LinesMesh](page.php?p=5724)(name, scene, updatable)


The [LinesMesh](page.php?p=5724) constructor


####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | @param name
 | scene | [Scene](page.php?p=5725) | The scene where the [LinesMesh](page.php?p=5724) is
optional | updatable | boolean | @param updatable
---

##Extends [Mesh](page.php?p=5722)
##Members

###color : [Color3](page.php?p=5805)



The color of the lines [Mesh](page.php?p=5722)


###alpha : number



The alpha


###material : [Material](page.php?p=5783)



The material of the Lines [Mesh](page.php?p=5722)


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
 | ray | [Ray](page.php?p=5815) | The ray
optional | fastCheck | boolean | if true, stop at the first result
---

###dispose(doNotRecurse) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
optional | doNotRecurse | boolean | @param doNotRecurse
---
