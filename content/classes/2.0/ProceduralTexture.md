---
ID_PAGE: 5796
PG_TITLE: ProceduralTexture
PG_VERSION: 2.0
---
##new [ProceduralTexture](page.php?p=5796)(name, size, fragment, scene, fallbackTexture, generateMipMaps)

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | size | any | 
 | fragment | any | 
 | scene | [Scene](page.php?p=5725) | 
optional | fallbackTexture | [Texture](page.php?p=5790) | 
optional | generateMipMaps | boolean | 
---

##Extends [Texture](page.php?p=5790)
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

###setTexture(name, texture) &rarr; [ProceduralTexture](page.php?p=5796)

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | texture | [Texture](page.php?p=5790) | 
---

###setFloat(name, value) &rarr; [ProceduralTexture](page.php?p=5796)

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | value | number | 
---

###setFloats(name, value) &rarr; [ProceduralTexture](page.php?p=5796)

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | value | number[] | 
---

###setColor3(name, value) &rarr; [ProceduralTexture](page.php?p=5796)

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | value | [Color3](page.php?p=5805) | 
---

###setColor4(name, value) &rarr; [ProceduralTexture](page.php?p=5796)

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | value | [Color4](page.php?p=5806) | 
---

###setVector2(name, value) &rarr; [ProceduralTexture](page.php?p=5796)

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | value | [Vector2](page.php?p=5807) | 
---

###setVector3(name, value) &rarr; [ProceduralTexture](page.php?p=5796)

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | value | [Vector3](page.php?p=5808) | 
---

###setMatrix(name, value) &rarr; [ProceduralTexture](page.php?p=5796)

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | value | [Matrix](page.php?p=5811) | 
---

###render(useCameraPostProcess) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
optional | useCameraPostProcess | boolean | 
---

###clone() &rarr; [ProceduralTexture](page.php?p=5796)


###dispose() &rarr; void

