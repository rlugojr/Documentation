---
ID_PAGE: 6735
PG_TITLE: RawTexture
PG_VERSION: 2.1
TAGS:
    - BaseTexture
    - Texture
---
##new [RawTexture](page.php?p=6735)(data, width, height, format, scene, generateMipMaps, invertY, samplingMode)




####Parameters
 | Name | Type | Description
---|---|---|---
 | data | ArrayBufferView | 
 | width | number | 
 | height | number | 
 | format | number | 
 | scene | [Scene](page.php?p=6662) | 
optional | generateMipMaps | boolean | 
optional | invertY | boolean | 
optional | samplingMode | number | 
---

##Extends
 [Texture](page.php?p=6733)


##Methods

###static CreateLuminanceTexture(data, width, height, scene, generateMipMaps, invertY, samplingMode) &rarr; [RawTexture](page.php?p=6735)



####Parameters
 | Name | Type | Description
---|---|---|---
 | data | ArrayBufferView | 
 | width | number | 
 | height | number | 
 | scene | [Scene](page.php?p=6662) | 
optional | generateMipMaps | boolean | 
optional | invertY | boolean | 
optional | samplingMode | number | 
---

###static CreateLuminanceAlphaTexture(data, width, height, scene, generateMipMaps, invertY, samplingMode) &rarr; [RawTexture](page.php?p=6735)



####Parameters
 | Name | Type | Description
---|---|---|---
 | data | ArrayBufferView | 
 | width | number | 
 | height | number | 
 | scene | [Scene](page.php?p=6662) | 
optional | generateMipMaps | boolean | 
optional | invertY | boolean | 
optional | samplingMode | number | 
---

###static CreateAlphaTexture(data, width, height, scene, generateMipMaps, invertY, samplingMode) &rarr; [RawTexture](page.php?p=6735)



####Parameters
 | Name | Type | Description
---|---|---|---
 | data | ArrayBufferView | 
 | width | number | 
 | height | number | 
 | scene | [Scene](page.php?p=6662) | 
optional | generateMipMaps | boolean | 
optional | invertY | boolean | 
optional | samplingMode | number | 
---

###static CreateRGBTexture(data, width, height, scene, generateMipMaps, invertY, samplingMode) &rarr; [RawTexture](page.php?p=6735)



####Parameters
 | Name | Type | Description
---|---|---|---
 | data | ArrayBufferView | 
 | width | number | 
 | height | number | 
 | scene | [Scene](page.php?p=6662) | 
optional | generateMipMaps | boolean | 
optional | invertY | boolean | 
optional | samplingMode | number | 
---

###static CreateRGBATexture(data, width, height, scene, generateMipMaps, invertY, samplingMode) &rarr; [RawTexture](page.php?p=6735)

####Parameters
 | Name | Type | Description
---|---|---|---
 | data | ArrayBufferView | 
 | width | number | 
 | height | number | 
 | scene | [Scene](page.php?p=6662) | 
optional | generateMipMaps | boolean | 
optional | invertY | boolean | 
optional | samplingMode | number | 
---
