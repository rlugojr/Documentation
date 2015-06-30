---
ID_PAGE: 5701
PG_TITLE: Node
PG_VERSION: 2.0
---
 [Node](page.php?p=5701) is the basic class for all scene objects (Mesh, [Light](page.php?p=5715) [Camera](page.php?p=5702)).
##new [Node](page.php?p=5701)(name, scene)

@constructor
####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The node identifier
 | scene | [Scene](page.php?p=5725) | The scene linked to this node.
---

##Members

###parent : [Node](page.php?p=5701)



The parent node of the node


###name : string



The name of the node


###id : string



The id of the node


###state : string



The state of the node


###animations : [Animation](page.php?p=5747)[]



The animations of the node


###onReady : (node: [Node](page.php?p=5701)) =&gt; void



Called when node is ready







##Methods

###getScene() &rarr; [Scene](page.php?p=5725)
Get the scene linked to this node




###getEngine() &rarr; [Engine](page.php?p=5700)
Get the engine linked to this node




###getWorldMatrix() &rarr; [Matrix](page.php?p=5811)
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
Is this node ready to be used/rendered
@return {boolean} is it ready


###isEnabled() &rarr; boolean
Is this node enabled.
If the node has a parent and is enabled, the parent will be inspected as well.
@return {boolean} whether this node (and its parent) is enabled.
@see setEnabled


###setEnabled(value) &rarr; void
Set the enabled state of this node.
@see isEnabled

####Parameters
 | Name | Type | Description
---|---|---|---
 | value | boolean | True to set the node enable ; False otherwise
---

###isDescendantOf(ancestor) &rarr; boolean
Is this node a descendant of the given node.
The function will iterate up the hierarchy until the ancestor was found or no more parents defined.
@see parent

####Parameters
 | Name | Type | Description
---|---|---|---
 | ancestor | [Node](page.php?p=5701) | The ancestor node to test
---

###getDescendants() &rarr; [Node](page.php?p=5701)[]
Will return all nodes that have this node as parent.
@return {BABYLON.Node[]} all children nodes of all types.

