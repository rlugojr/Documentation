---
ID_PAGE: 25207
PG_TITLE: Layer
PG_VERSION: 2.1
---
##Description

class [Layer](/classes/2.2-alpha/Layer)



##Constructor

##new [Layer](/classes/2.2-alpha/Layer)(name, imgUrl, scene, isBackground, color)

The [Layer](/classes/2.2-alpha/Layer) constructor

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | imgUrl | string | 
 | scene | [Scene](/classes/2.2-alpha/Scene) | 
optional | isBackground | boolean | 
optional | color | [Color4](/classes/2.2-alpha/Color4) | 

##Members

###name : string

The layer name

###texture : [Texture](/classes/2.2-alpha/Texture)

The texture to display for this layer

###isBackground : boolean

If set to true, then this layer will be displayed as a background.

###color : [Color4](/classes/2.2-alpha/Color4)

The color of this layer

###onDispose : () =&gt; void

Dispose

##Methods

###render() &rarr; void

Function used to render this layer
###dispose() &rarr; void


