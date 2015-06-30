---
ID_PAGE: 3248
PG_TITLE: Node
PG_VERSION: 1.14
---
##new [Node](page.php?p=3248)(name, scene)

Empty default constructor. A node is the super class of a [BABYLON](page.php?p=3243).Mesh, [BABYLON](page.php?p=3243).Light, and [BABYLON](page.php?p=3243).Camera.
####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The node identifier
 | scene | any | The scene linked to this node.
---

##Members

###parent : [Node](page.php?p=3248)


The parent node of the node

###name : string


The name of the node

###id : string


The id of the node

###state : string


The state of the node

###animations : [Animation](page.php?p=3294)[]


The animations of the node

###onReady : (node: [Node](page.php?p=3248)) =&gt; void


Called when node is ready



##Methods

###getScene() &rarr; [Scene](page.php?p=3274)
Get the scene linked to this node


###getEngine() &rarr; [Engine](page.php?p=3247)
Get the engine linked to this node


###getWorldMatrix() &rarr; [Matrix](page.php?p=3329)
Get the world matrix


###updateCache(force) &rarr; void
Update the cache

####Parameters
 | Name | Type | Description
---|---|---|---
optional | force | boolean | True to force the update
---

###isSynchronizedWithParent() &rarr; boolean
Return true if the node is synchronized with parent


###isSynchronized(updateCache) &rarr; boolean
Return true if the node is synchronized

####Parameters
 | Name | Type | Description
---|---|---|---
optional | updateCache | boolean | True to update the cache
---

###hasNewParent(update) &rarr; boolean
Return true if the node has new parent

####Parameters
 | Name | Type | Description
---|---|---|---
optional | update | boolean | True to update the node
---

###isReady() &rarr; boolean
Return true if the node is ready


###isEnabled() &rarr; boolean
Return true if the node is enabled


###setEnabled(value) &rarr; void
Set the node enable

####Parameters
 | Name | Type | Description
---|---|---|---
 | value | boolean | True to set the node enable ; False otherwise
---

###isDescendantOf(ancestor) &rarr; boolean
Return true if the node is descendant of the specified other node

####Parameters
 | Name | Type | Description
---|---|---|---
 | ancestor | [Node](page.php?p=3248) | The ancestor node to test
---

###getDescendants() &rarr; [Node](page.php?p=3248)[]
Get the descendants of the node

