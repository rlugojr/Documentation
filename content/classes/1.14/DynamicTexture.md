---
ID_PAGE: 24528
PG_TITLE: DynamicTexture
PG_VERSION: 1.14
---
##new [DynamicTexture](/classes/DynamicTexture)(name, options, scene, generateMipMaps, samplingMode)

Create a new [DynamicTexture](/classes/DynamicTexture).
A tutorial about dynamic textures can be found here : http://blogs.msdn.com/b/eternalcoding/archive/2013/08/12/creating-a-3d-chart-for-your-windows-8-1-app-using-babylon-js.aspx
####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | Name of the texture
 | options | any | Options of the dynamic texture
 | scene | [Scene](/classes/Scene) | [Scene](/classes/Scene) which contain the texture
 | generateMipMaps | boolean | @param generateMipMaps
optional | samplingMode | number | @param samplingMode
---

##Extends [Texture](/classes/Texture)


##Methods

###getContext() &rarr; CanvasRenderingContext2D
Get the context
@return CanvasRenderingContext2D The canvas where the game is rendered


###update(invertY) &rarr; void
Update the dynamic texture

####Parameters
 | Name | Type | Description
---|---|---|---
optional | invertY | boolean | Invert the texture on Y axis
---

###drawText(text, x, y, font, color, clearColor, invertY) &rarr; void
Draw a text on view

####Parameters
 | Name | Type | Description
---|---|---|---
 | text | string | A string with the text
 | x | number | The position on X axis of the text to draw
 | y | number | The position on Y axis of the text to draw
 | font | string | The font of the text to draw
 | color | string | The color of the text to draw in hexadecimal
 | clearColor | string | The clear color of the text to draw in hexadecimal
optional | invertY | boolean | Invert the text on Y axis
---

###clone() &rarr; [DynamicTexture](/classes/DynamicTexture)
Clone the dynamic texture
@return [DynamicTexture](/classes/DynamicTexture) A clone of the dynamic texture

