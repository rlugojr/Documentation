---
ID_PAGE: 6739
PG_TITLE: ProceduralTexture
PG_VERSION: 2.1
---
##new [ProceduralTexture](page.php?p=6739)(name, size, fragment, scene, fallbackTexture, generateMipMaps)




####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | size | any | 
 | fragment | any | 
 | scene | [Scene](page.php?p=6662) | 
optional | fallbackTexture | [Texture](page.php?p=6733) | 
optional | generateMipMaps | boolean | 
---

##Extends [Texture](page.php?p=6733)
##Members

###refreshRate : number









##Methods

###reset() &rarr; void




###isReady() &rarr; boolean




###resetRefreshCounter() &rarr; void




###setFragment(fragment) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | fragment | any | 
---

###getRenderSize() &rarr; number




###resize(size, generateMipMaps) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | size | any | 
 | generateMipMaps | any | 
---

###setTexture(name, texture) &rarr; [ProceduralTexture](page.php?p=6739)



####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | texture | [Texture](page.php?p=6733) | 
---

###setFloat(name, value) &rarr; [ProceduralTexture](page.php?p=6739)



####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | value | number | 
---

###setFloats(name, value) &rarr; [ProceduralTexture](page.php?p=6739)



####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | value | number[] | 
---

###setColor3(name, value) &rarr; [ProceduralTexture](page.php?p=6739)



####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | value | [Color3](page.php?p=6748) | 
---

###setColor4(name, value) &rarr; [ProceduralTexture](page.php?p=6739)



####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | value | [Color4](page.php?p=6749) | 
---

###setVector2(name, value) &rarr; [ProceduralTexture](page.php?p=6739)



####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | value | [Vector2](page.php?p=6750) | 
---

###setVector3(name, value) &rarr; [ProceduralTexture](page.php?p=6739)



####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | value | [Vector3](page.php?p=6751) | 
---

###setMatrix(name, value) &rarr; [ProceduralTexture](page.php?p=6739)



####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | value | [Matrix](page.php?p=6754) | 
---

###render(useCameraPostProcess) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
optional | useCameraPostProcess | boolean | 
---

###clone() &rarr; [ProceduralTexture](page.php?p=6739)




###dispose() &rarr; void

