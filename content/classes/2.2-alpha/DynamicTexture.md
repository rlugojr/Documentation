---
ID_PAGE: 25222
PG_TITLE: DynamicTexture
PG_VERSION: 2.1
TAGS:
    - BaseTexture
    - Texture
---
##Description

class [DynamicTexture](/classes/2.2-alpha/DynamicTexture) extends [Texture](/classes/2.2-alpha/Texture)



##Constructor

##new [DynamicTexture](/classes/2.2-alpha/DynamicTexture)(name, options, scene, generateMipMaps, samplingMode)

Create a new [DynamicTexture](/classes/2.2-alpha/DynamicTexture).
A tutorial about dynamic textures can be found here : http://blogs.msdn.com/b/eternalcoding/archive/2013/08/12/creating-a-3d-chart-for-your-windows-8-1-app-using-babylon-js.aspx

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | options | any | 
 | scene | [Scene](/classes/2.2-alpha/Scene) | 
 | generateMipMaps | boolean | 
optional | samplingMode | number | 

##Members

###canRescale : boolean



##Methods

###scale(ratio) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | ratio | number | 

###getContext() &rarr; CanvasRenderingContext2D

Get the context
@return CanvasRenderingContext2D The canvas where the game is rendered
###clear() &rarr; void


###update(invertY) &rarr; void

Update the dynamic texture

####Parameters
 | Name | Type | Description
---|---|---|---
optional | invertY | boolean | 

###drawText(text, x, y, font, color, clearColor, invertY, update) &rarr; void

Draw a text on view

####Parameters
 | Name | Type | Description
---|---|---|---
 | text | string | 
 | x | number | 
 | y | number | 
 | font | string | 
 | color | string | 
 | clearColor | string | 
optional | invertY | boolean | 
optional | update | boolean | 

###clone() &rarr; [DynamicTexture](/classes/2.2-alpha/DynamicTexture)


