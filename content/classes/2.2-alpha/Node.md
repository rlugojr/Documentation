---
ID_PAGE: 25118
PG_TITLE: Node
PG_VERSION: 2.1
TAGS:
    - Node
---
##Description

class [Node](/classes/2.2-alpha/Node)

[Node](/classes/2.2-alpha/Node) is the basic class for all scene objects ([Mesh](/classes/2.2-alpha/Mesh), [Light](/classes/2.2-alpha/Light) [Camera](/classes/2.2-alpha/Camera)).

##Constructor

##new [Node](/classes/2.2-alpha/Node)(name, scene)

@constructor

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | scene | [Scene](/classes/2.2-alpha/Scene) | 

##Members

###parent : [Node](/classes/2.2-alpha/Node)

The parent node of the node

###name : string

The name of the node

###id : string

The id of the node

###uniqueId : number



###state : string

The state of the node

###animations : [Animation](/classes/2.2-alpha/Animation)[]

The animations of the node

###onReady : (node: [Node](/classes/2.2-alpha/Node)) =&gt; void

Called when node is ready

##Methods

###getScene() &rarr; [Scene](/classes/2.2-alpha/Scene)

Get the scene linked to this node
###getEngine() &rarr; [Engine](/classes/2.2-alpha/Engine)

Get the engine linked to this node
###getWorldMatrix() &rarr; [Matrix](/classes/2.2-alpha/Matrix)

Get the world matrix
###updateCache(force) &rarr; void

Update the cache

####Parameters
 | Name | Type | Description
---|---|---|---
optional | force | boolean | 

###isSynchronizedWithParent() &rarr; boolean

Return true if the node is synchronized with parent
###isSynchronized(updateCache) &rarr; boolean

Return true if the node is synchronized

####Parameters
 | Name | Type | Description
---|---|---|---
optional | updateCache | boolean | 

###hasNewParent(update) &rarr; boolean

Return true if the node has new parent

####Parameters
 | Name | Type | Description
---|---|---|---
optional | update | boolean | 

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
 | value | boolean | 

###isDescendantOf(ancestor) &rarr; boolean

Is this node a descendant of the given node.

The function will iterate up the hierarchy until the ancestor was found or no more parents defined.

@see parent

####Parameters
 | Name | Type | Description
---|---|---|---
 | ancestor | [Node](/classes/2.2-alpha/Node) | 

###getDescendants() &rarr; [Node](/classes/2.2-alpha/Node)[]

Will return all nodes that have this node as parent.

@return {BABYLON.[Node](/classes/2.2-alpha/Node)[]} all children nodes of all types.
