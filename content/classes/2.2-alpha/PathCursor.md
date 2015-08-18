---
ID_PAGE: 25251
PG_TITLE: PathCursor
PG_VERSION: 2.1
---
##Description

class [PathCursor](/classes/2.2-alpha/PathCursor)



##Constructor

##new [PathCursor](/classes/2.2-alpha/PathCursor)(path)



####Parameters
 | Name | Type | Description
---|---|---|---
 | path | [Path2](/classes/2.2-alpha/Path2) | 

##Members

###value : number



###animations : [Animation](/classes/2.2-alpha/Animation)[]



##Methods

###getPoint() &rarr; [Vector3](/classes/2.2-alpha/Vector3)


###moveAhead(step) &rarr; [PathCursor](/classes/2.2-alpha/PathCursor)



####Parameters
 | Name | Type | Description
---|---|---|---
optional | step | number | 

###moveBack(step) &rarr; [PathCursor](/classes/2.2-alpha/PathCursor)



####Parameters
 | Name | Type | Description
---|---|---|---
optional | step | number | 

###move(step) &rarr; [PathCursor](/classes/2.2-alpha/PathCursor)



####Parameters
 | Name | Type | Description
---|---|---|---
 | step | number | 

###onchange(f) &rarr; [PathCursor](/classes/2.2-alpha/PathCursor)



####Parameters
 | Name | Type | Description
---|---|---|---
 | f | (cursor: [PathCursor](/classes/2.2-alpha/PathCursor)) =&gt; void | 

