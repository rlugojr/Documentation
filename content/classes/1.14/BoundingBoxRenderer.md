---
ID_PAGE: 3362
PG_TITLE: BoundingBoxRenderer
PG_VERSION: 1.14
---
##new [BoundingBoxRenderer](page.php?p=3362)(scene)

Creates a new renderer used to display the bounding box of its render list
####Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](page.php?p=3274) | The scene linked to this [BoundingBoxRenderer](page.php?p=3362)
---

##Members

###frontColor : [Color3](page.php?p=3324)


The front color of the bounding box

###backColor : [Color3](page.php?p=3324)


The back color of the bounding box

###showBackLines : boolean


True if back lines should be displayed, false otherwise

default : true

###renderList : SmartArray&lt;BoundingBox&gt;


This renderer render list



##Methods

###reset() &rarr; void
Reset the render list


###render() &rarr; void
The render function


###dispose() &rarr; void
Dispose all objects.

