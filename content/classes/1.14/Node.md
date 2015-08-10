---
ID_PAGE: 24456
PG_TITLE: Node
PG_VERSION: 1.14
---
##new [Node](/classes/Node)(name, scene)

Empty default constructor. A node is the super class of a [Mesh](/classes/Mesh), [Light](/classes/Light), and [Camera](/classes/Camera).
####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The node identifier
 | scene | any | The scene linked to this node.
---

##Members

###parent : [Node](/classes/Node)


The parent node of the node

###name : string


The name of the node

###id : string


The id of the node

###state : string


The state of the node

###animations : [Animation](/classes/Animation)[]


The animations of the node

###onReady : (node: [Node](/classes/Node)) =&gt; void


Called when node is ready



##Methods

###getScene() &rarr; [Scene](/classes/Scene)
Get the scene linked to this node


###getEngine() &rarr; [Engine](/classes/Engine)
Get the engine linked to this node


###getWorldMatrix() &rarr; [Matrix](/classes/Matrix)
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
 | ancestor | [Node](/classes/Node) | The ancestor node to test
---

###getDescendants() &rarr; [Node](/classes/Node)[]
Get the descendants of the node

