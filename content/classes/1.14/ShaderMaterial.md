---
ID_PAGE: 3314
PG_TITLE: ShaderMaterial
PG_VERSION: 1.14
---
##new [ShaderMaterial](page.php?p=3314)(name, scene, shaderPath, options)

A material using a shader to render a special effect. When you create a [BABYLON](page.php?p=3243).ShaderMaterial, you have to
specify the DOM element used to store the shaders or the base name of the files where the shaders are.
If you choose to use files, you must create a file for each shader and use the following pattern basename.vertex.fx and basename.fragment,.fx.
A tutorial abouth ShaderMaterials can be found here : http://blogs.msdn.com/b/eternalcoding/archive/2014/04/17/learning-shaders-create-your-own-shaders-with-babylon-js.aspx
####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | This material name
 | scene | [Scene](page.php?p=3274) | [Scene](page.php?p=3274) which contain this material
 | shaderPath | any | The path to shader files if any
 | options | any | An options object should contain needAlphaBlending, needAlphaTesting, attributes, uniforms and samplers
---

##Extends [Material](page.php?p=3312)


##Methods

###needAlphaBlending() &rarr; boolean
Function to know if material need alpha blending
@return boolean True if need alpha blending ; False if not


###needAlphaTesting() &rarr; boolean
Function to know if material need alpha testing
@return boolean True if need alpha testing ; False if not


###setTexture(name, texture) &rarr; [ShaderMaterial](page.php?p=3314)
Set a texture to the material
@return [ShaderMaterial](page.php?p=3314) Return a new shaderMaterial

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | Name of the texture
 | texture | [Texture](page.php?p=3319) | [Texture](page.php?p=3319) to set to the material
---

###setFloat(name, value) &rarr; [ShaderMaterial](page.php?p=3314)
Set float to the material
@return [ShaderMaterial](page.php?p=3314) Return a new shaderMaterial

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | Name of the float
 | value | number | Value of the float
---

###setFloats(name, value) &rarr; [ShaderMaterial](page.php?p=3314)
Set floats to the material
@return [ShaderMaterial](page.php?p=3314) Return a new shaderMaterial

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | Name of the floats
 | value | number[] | Array of floats value
---

###setColor3(name, value) &rarr; [ShaderMaterial](page.php?p=3314)
Set color3 to the material
@return [ShaderMaterial](page.php?p=3314) Return a new shaderMaterial

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | Name of the color3
 | value | [Color3](page.php?p=3324) | The color3
---

###setColor4(name, value) &rarr; [ShaderMaterial](page.php?p=3314)
Set color4 to the material
@return [ShaderMaterial](page.php?p=3314) Return a new shaderMaterial

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | Name of the color4
 | value | [Color4](page.php?p=3325) | The color4
---

###setVector2(name, value) &rarr; [ShaderMaterial](page.php?p=3314)
Set a vector2 to the material
@return [ShaderMaterial](page.php?p=3314) Return a new shaderMaterial

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | Name of the vector2
 | value | [Vector2](page.php?p=3326) | The vector2
---

###setVector3(name, value) &rarr; [ShaderMaterial](page.php?p=3314)
Set a vector3 to the material

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | Name of the vector3
 | value | [Vector3](page.php?p=3327) | The vector3
---

###setMatrix(name, value) &rarr; [ShaderMaterial](page.php?p=3314)
Set a matrix to the material

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | Name of the matrix
 | value | [Matrix](page.php?p=3329) | The matrix
---

###isReady() &rarr; boolean
Function to know if the material is ready
@return True if the material is ready ; False if not


###bind(world) &rarr; void
Function to bind the material

####Parameters
 | Name | Type | Description
---|---|---|---
 | world | [Matrix](page.php?p=3329) | [Matrix](page.php?p=3329) to bind the material
---

###dispose(forceDisposeEffect) &rarr; void
Function to destroy the material

####Parameters
 | Name | Type | Description
---|---|---|---
optional | forceDisposeEffect | boolean | True to force the dispose
---
