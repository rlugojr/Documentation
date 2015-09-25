---
ID_PAGE: 25216
PG_TITLE: ShaderMaterial
PG_VERSION: 2.1
TAGS:
    - Material
---
##Description

class [ShaderMaterial](/classes/2.2/ShaderMaterial) extends [Material](/classes/2.2/Material)



##Constructor

##new [ShaderMaterial](/classes/2.2/ShaderMaterial)(name, scene, shaderPath, options)

A material using a shader to render a special effect. When you create a [ShaderMaterial](/classes/2.2/ShaderMaterial), you have to
specify the DOM element used to store the shaders or the base name of the files where the shaders are.
If you choose to use files, you must create a file for each shader and use the following pattern basename.vertex.fx and basename.fragment,.fx.
A tutorial abouth ShaderMaterials can be found here : http://blogs.msdn.com/b/eternalcoding/archive/2014/04/17/learning-shaders-create-your-own-shaders-with-babylon-js.aspx

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | scene | [Scene](/classes/2.2/Scene) | 
 | shaderPath | any | 
 | options | any | 

##Methods

###needAlphaBlending() &rarr; boolean

Function to know if material need alpha blending
@return boolean True if need alpha blending ; False if not
###needAlphaTesting() &rarr; boolean

Function to know if material need alpha testing
@return boolean True if need alpha testing ; False if not
###setTexture(name, texture) &rarr; [ShaderMaterial](/classes/2.2/ShaderMaterial)

Set a texture to the material
@return [ShaderMaterial](/classes/2.2/ShaderMaterial) Return a new shaderMaterial

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | texture | [Texture](/classes/2.2/Texture) | 

###setFloat(name, value) &rarr; [ShaderMaterial](/classes/2.2/ShaderMaterial)

Set float to the material
@return [ShaderMaterial](/classes/2.2/ShaderMaterial) Return a new shaderMaterial

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | value | number | 

###setFloats(name, value) &rarr; [ShaderMaterial](/classes/2.2/ShaderMaterial)

Set floats to the material
@return [ShaderMaterial](/classes/2.2/ShaderMaterial) Return a new shaderMaterial

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | value | number[] | 

###setColor3(name, value) &rarr; [ShaderMaterial](/classes/2.2/ShaderMaterial)

Set color3 to the material
@return [ShaderMaterial](/classes/2.2/ShaderMaterial) Return a new shaderMaterial

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | value | [Color3](/classes/2.2/Color3) | 

###setColor4(name, value) &rarr; [ShaderMaterial](/classes/2.2/ShaderMaterial)

Set color4 to the material
@return [ShaderMaterial](/classes/2.2/ShaderMaterial) Return a new shaderMaterial

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | value | [Color4](/classes/2.2/Color4) | 

###setVector2(name, value) &rarr; [ShaderMaterial](/classes/2.2/ShaderMaterial)

Set a vector2 to the material
@return [ShaderMaterial](/classes/2.2/ShaderMaterial) Return a new shaderMaterial

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | value | [Vector2](/classes/2.2/Vector2) | 

###setVector3(name, value) &rarr; [ShaderMaterial](/classes/2.2/ShaderMaterial)

Set a vector3 to the material

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | value | [Vector3](/classes/2.2/Vector3) | 

###setVector4(name, value) &rarr; [ShaderMaterial](/classes/2.2/ShaderMaterial)



####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | value | [Vector4](/classes/2.2/Vector4) | 

###setMatrix(name, value) &rarr; [ShaderMaterial](/classes/2.2/ShaderMaterial)

Set a matrix to the material

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | value | [Matrix](/classes/2.2/Matrix) | 

###setMatrix3x3(name, value) &rarr; [ShaderMaterial](/classes/2.2/ShaderMaterial)



####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | value | Float32Array | 

###setMatrix2x2(name, value) &rarr; [ShaderMaterial](/classes/2.2/ShaderMaterial)



####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | value | Float32Array | 

###isReady(mesh, useInstances) &rarr; boolean

Function to know if the material is ready
@return True if the material is ready ; False if not

####Parameters
 | Name | Type | Description
---|---|---|---
optional | mesh | [AbstractMesh](/classes/2.2/AbstractMesh) | 
optional | useInstances | boolean | 

###bindOnlyWorldMatrix(world) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | world | [Matrix](/classes/2.2/Matrix) | 

###bind(world, mesh) &rarr; void

Function to bind the material

####Parameters
 | Name | Type | Description
---|---|---|---
 | world | [Matrix](/classes/2.2/Matrix) | 
optional | mesh | [Mesh](/classes/2.2/Mesh) | 

###clone(name) &rarr; [ShaderMaterial](/classes/2.2/ShaderMaterial)



####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 

###dispose(forceDisposeEffect) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
optional | forceDisposeEffect | boolean | 

