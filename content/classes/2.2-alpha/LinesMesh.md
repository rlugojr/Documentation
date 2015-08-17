---
ID_PAGE: 25149
PG_TITLE: LinesMesh
PG_VERSION: 2.1
TAGS:
    - Node
    - Mesh
---
##Description

class [LinesMesh](/classes/2.2-alpha/LinesMesh) extends [Mesh](/classes/2.2-alpha/Mesh)



##Constructor

##new [LinesMesh](/classes/2.2-alpha/LinesMesh)(name, scene, updatable)

The [LinesMesh](/classes/2.2-alpha/LinesMesh) constructor

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | scene | [Scene](/classes/2.2-alpha/Scene) | 
optional | updatable | boolean | 

##Members

###color : [Color3](/classes/2.2-alpha/Color3)

The color of the lines [Mesh](/classes/2.2-alpha/Mesh)

###alpha : number

The alpha

###material : [Material](/classes/2.2-alpha/Material)

The material of the Lines [Mesh](/classes/2.2-alpha/Mesh)

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
 | ray | [Ray](/classes/2.2-alpha/Ray) | 
optional | fastCheck | boolean | 

###dispose(doNotRecurse) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
optional | doNotRecurse | boolean | 

