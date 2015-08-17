---
ID_PAGE: 25213
PG_TITLE: Effect
PG_VERSION: 2.1
TAGS:
    - Effect
---
##Description

class [Effect](/classes/2.2-alpha/Effect)



##Constructor

##new [Effect](/classes/2.2-alpha/Effect)(baseName, attributesNames, uniformsNames, samplers, engine, defines, fallbacks, onCompiled, onError)

The [Effect](/classes/2.2-alpha/Effect) constructor

####Parameters
 | Name | Type | Description
---|---|---|---
 | baseName | any | 
 | attributesNames | string[] | 
 | uniformsNames | string[] | 
 | samplers | string[] | 
 | engine | any | 
optional | defines | string | 
optional | fallbacks | [EffectFallbacks](/classes/2.2-alpha/EffectFallbacks) | 
optional | onCompiled | (effect: [Effect](/classes/2.2-alpha/Effect)) =&gt; void | 
optional | onError | (effect: [Effect](/classes/2.2-alpha/Effect), errors: string) =&gt; void | 

##Members

###name : any

The effect name

###defines : string

The array of defines used by this effect

###onCompiled : (effect: [Effect](/classes/2.2-alpha/Effect)) =&gt; void

Function called when given effect are successfully compiled

###onError : (effect: [Effect](/classes/2.2-alpha/Effect), errors: string) =&gt; void

Function called when an error occurs

###onBind : (effect: [Effect](/classes/2.2-alpha/Effect)) =&gt; void



###static ShadersStore : { }



##Methods

###isReady() &rarr; boolean

Function to know if effect is ready
###getProgram() &rarr; WebGLProgram

Return the shader program linked to this effect
###getAttributesNames() &rarr; string[]

Return attributes names of the effect
###getAttributeLocation(index) &rarr; number

Return the attribute location at the specified index

####Parameters
 | Name | Type | Description
---|---|---|---
 | index | number | 

###getAttributeLocationByName(name) &rarr; number

Return the attribute location at the specified name

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 

###getAttributesCount() &rarr; number

Return the number of attributes
###getUniformIndex(uniformName) &rarr; number

Return the index of the searched name

####Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | 

###getUniform(uniformName) &rarr; WebGLUniformLocation

Return searched parameter if exist

####Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | 

###getSamplers() &rarr; string[]

Return samplers
###getCompilationError() &rarr; string

Return the program compilation error
###setTexture(channel, texture) &rarr; void

Set the texture to the effect

####Parameters
 | Name | Type | Description
---|---|---|---
 | channel | string | 
 | texture | [BaseTexture](/classes/2.2-alpha/BaseTexture) | 

###setTextureFromPostProcess(channel, postProcess) &rarr; void

Set the texture to the effect from post process

####Parameters
 | Name | Type | Description
---|---|---|---
 | channel | string | 
 | postProcess | [PostProcess](/classes/2.2-alpha/PostProcess) | 

###setArray(uniformName, array) &rarr; [Effect](/classes/2.2-alpha/Effect)

Set the array given by its name

####Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | 
 | array | number[] | 

###setArray2(uniformName, array) &rarr; [Effect](/classes/2.2-alpha/Effect)



####Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | 
 | array | number[] | 

###setArray3(uniformName, array) &rarr; [Effect](/classes/2.2-alpha/Effect)



####Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | 
 | array | number[] | 

###setArray4(uniformName, array) &rarr; [Effect](/classes/2.2-alpha/Effect)



####Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | 
 | array | number[] | 

###setMatrices(uniformName, matrices) &rarr; [Effect](/classes/2.2-alpha/Effect)

Set the matrice given by its name

####Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | 
 | matrices | Float32Array | 

###setMatrix(uniformName, matrix) &rarr; [Effect](/classes/2.2-alpha/Effect)

Set the matrix given by its name

####Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | 
 | matrix | [Matrix](/classes/2.2-alpha/Matrix) | 

###setMatrix3x3(uniformName, matrix) &rarr; [Effect](/classes/2.2-alpha/Effect)



####Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | 
 | matrix | Float32Array | 

###setMatrix2x2(uniformname, matrix) &rarr; [Effect](/classes/2.2-alpha/Effect)



####Parameters
 | Name | Type | Description
---|---|---|---
 | uniformname | string | 
 | matrix | Float32Array | 

###setFloat(uniformName, value) &rarr; [Effect](/classes/2.2-alpha/Effect)

Set the float given by its name

####Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | 
 | value | number | 

###setBool(uniformName, bool) &rarr; [Effect](/classes/2.2-alpha/Effect)

Set the boolean given by its name

####Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | 
 | bool | boolean | 

###setVector2(uniformName, vector2) &rarr; [Effect](/classes/2.2-alpha/Effect)

Set the vector2 given by its name

####Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | 
 | vector2 | [Vector2](/classes/2.2-alpha/Vector2) | 

###setFloat2(uniformName, x, y) &rarr; [Effect](/classes/2.2-alpha/Effect)

Set the float2 given by its name

####Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | 
 | x | number | 
 | y | number | 

###setVector3(uniformName, vector3) &rarr; [Effect](/classes/2.2-alpha/Effect)

Set the [Vector3](/classes/2.2-alpha/Vector3) given by its name

####Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | 
 | vector3 | [Vector3](/classes/2.2-alpha/Vector3) | 

###setFloat3(uniformName, x, y, z) &rarr; [Effect](/classes/2.2-alpha/Effect)

Set the float3 given by its name

####Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | 
 | x | number | 
 | y | number | 
 | z | number | 

###setVector4(uniformName, vector4) &rarr; [Effect](/classes/2.2-alpha/Effect)



####Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | 
 | vector4 | [Vector4](/classes/2.2-alpha/Vector4) | 

###setFloat4(uniformName, x, y, z, w) &rarr; [Effect](/classes/2.2-alpha/Effect)

Set the float4 given by its name

####Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | 
 | x | number | 
 | y | number | 
 | z | number | 
 | w | number | 

###setColor3(uniformName, color3) &rarr; [Effect](/classes/2.2-alpha/Effect)

Set the color3 given by its name

####Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | 
 | color3 | [Color3](/classes/2.2-alpha/Color3) | 

###setColor4(uniformName, color3, alpha) &rarr; [Effect](/classes/2.2-alpha/Effect)



####Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | 
 | color3 | [Color3](/classes/2.2-alpha/Color3) | 
 | alpha | number | 

