---
ID_PAGE: 3305
PG_TITLE: Layer
PG_VERSION: 1.14
---

Create a new 2D layer (used to represents backgrounds and/or foregrounds)
##new [Layer](page.php?p=3305)(name, imgUrl, scene, isBackground, color)

The [Layer](page.php?p=3305) constructor
####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The layer name
 | imgUrl | string | The texture URL to display for this layer
 | scene | [Scene](page.php?p=3274) | The scene linked to this layer
optional | isBackground | boolean | If set to true, then this layer will be displayed as a background
optional | color | [Color4](page.php?p=3325) | The color of this layer
---

##Members

###name : string


The layer name

###texture : [Texture](page.php?p=3319)


The texture to display for this layer

###isBackground : boolean


If set to true, then this layer will be displayed as a background.

###color : [Color4](page.php?p=3325)


The color of this layer

###onDispose : () =&gt; void


Dispose



##Methods

###render() &rarr; void
Function used to render this layer


###dispose() &rarr; void
Delete this layer

