---
ID_PAGE: 5859
PG_TITLE: BoundingBoxRenderer
PG_VERSION: 2.0
---
##new [BoundingBoxRenderer](page.php?p=5859)(scene)


Creates a new renderer used to display the bounding box of its render list


####Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](page.php?p=5725) | The scene linked to this [BoundingBoxRenderer](page.php?p=5859)
---

##Members

###frontColor : [Color3](page.php?p=5805)



The front color of the bounding box


###backColor : [Color3](page.php?p=5805)



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

