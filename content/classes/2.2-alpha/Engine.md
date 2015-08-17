---
ID_PAGE: 25117
PG_TITLE: Engine
PG_VERSION: 2.1
TAGS:
    -   Engine
---
##Description

class [Engine](/classes/2.2-alpha/Engine)

The engine class is responsible for interfacing with all lower-level APIs such as WebGL and Audio.

##Constructor

##new [Engine](/classes/2.2-alpha/Engine)(canvas, antialias, options)

@constructor

####Parameters
 | Name | Type | Description
---|---|---|---
 | canvas | HTMLCanvasElement | 
optional | antialias | boolean | 
optional | options | any |  - further options to be sent to the getContext function

##Members

###static ALPHA_DISABLE : number

Alpha disable

###static ALPHA_ONEONE : number



###static ALPHA_ADD : number

Add Alpha

###static ALPHA_COMBINE : number

Combine Alpha

###static ALPHA_SUBTRACT : number



###static ALPHA_MULTIPLY : number



###static ALPHA_MAXIMIZED : number



###static DELAYLOADSTATE_NONE : number

The delay when you don't load

###static DELAYLOADSTATE_LOADED : number

The delay for loaded

###static DELAYLOADSTATE_LOADING : number

The delay of loading

###static DELAYLOADSTATE_NOTLOADED : number

The delay

###static TEXTUREFORMAT_ALPHA : number



###static TEXTUREFORMAT_LUMINANCE : number



###static TEXTUREFORMAT_LUMINANCE_ALPHA : number



###static TEXTUREFORMAT_RGB : number



###static TEXTUREFORMAT_RGBA : number



###static TEXTURETYPE_UNSIGNED_INT : number



###static TEXTURETYPE_FLOAT : number



###static Version : string



###static Epsilon : number

This member is static : use [Engine](/classes/2.2-alpha/Engine).Epsilon

Default value : 0.001

###static CollisionsEpsilon : number

This member is static : use [Engine](/classes/2.2-alpha/Engine).CollisionsEpsilon

Default value : 0.001

###static CodeRepository : string



###static ShadersRepository : string

This member is static : use [Engine](/classes/2.2-alpha/Engine).ShadersRepository

Default value : &quot;Babylon/Shaders/&quot;

Used as the source directory of shaders on the host machine

###isFullscreen : boolean

Default value: false

True if fullscreen, false otherwise

###isPointerLock : boolean

Default value: false

True if the pointer is locked, false otherwise

###cullBackFaces : boolean

Default value: true

True if back faces should be culled, false otherwise

###renderEvenInBackground : boolean

Default value: true

If true, the engine will compute all frames even if the app is in background

###enableOfflineSupport : boolean



###scenes : [Scene](/classes/2.2-alpha/Scene)[]

An array of [Scene](/classes/2.2-alpha/Scene)

###static audioEngine : [AudioEngine](/classes/2.2-alpha/AudioEngine)



###drawCalls : number

The number of draw calls submitted last frame

###loadingUIText : string

Default Value: &quot;Loading&quot;

Sets the innerHTML for the loading UI created in to displayLoadingUI : void

###loadingUIBackgroundColor : string

Get/Set the background color for the loading UI created in to displayLoadingUI : void

##Methods

###getGlInfo() &rarr; { vendor: string,  renderer: string,  version: string }


###getAspectRatio(camera) &rarr; number

Returns the screen aspect ratio

####Parameters
 | Name | Type | Description
---|---|---|---
 | camera | [Camera](/classes/2.2-alpha/Camera) | 

###getRenderWidth() &rarr; number

If a current render target is set, returns its width.
###getRenderHeight() &rarr; number

If a current render target is set, returns its height.
Otherwise, returns the rendering canvas height
###getRenderingCanvas() &rarr; HTMLCanvasElement

Returns the rendering canvas
###getRenderingCanvasClientRect() &rarr; ClientRect


###setHardwareScalingLevel(level) &rarr; void

Set the hardware scaling level. The engine is then resized with these new parameters (width/level, height/level).

####Parameters
 | Name | Type | Description
---|---|---|---
 | level | number | 

###getHardwareScalingLevel() &rarr; number

Returns the hardware scaling level
###getLoadedTexturesCache() &rarr; WebGLTexture[]

Returns all loaded textures from the caches
###getCaps() &rarr; [EngineCapabilities](/classes/2.2-alpha/EngineCapabilities)

Returns the engine capabilities
###resetDrawCalls() &rarr; void


###setDepthFunctionToGreater() &rarr; void

Set the Depth function to greater
###setDepthFunctionToGreaterOrEqual() &rarr; void

Set the Depth function to greater or equal
###setDepthFunctionToLess() &rarr; void

Set the Depth function to less
###setDepthFunctionToLessOrEqual() &rarr; void

Set the Depth function to less or equal
###stopRenderLoop(renderFunction) &rarr; void

stop executing a render loop function and remove it from the execution array

####Parameters
 | Name | Type | Description
---|---|---|---
optional | renderFunction | () =&gt; void | 

###runRenderLoop(renderFunction) &rarr; void

Register and execute a render loop. The engine can have more than one render function.

@example

engine.runRenderLoop(function () {

     scene.render()

})

####Parameters
 | Name | Type | Description
---|---|---|---
 | renderFunction | () =&gt; void | 

###switchFullscreen(requestPointerLock) &rarr; void

Toggle full screen mode.

####Parameters
 | Name | Type | Description
---|---|---|---
 | requestPointerLock | boolean | 

###clear(color, backBuffer, depthStencil) &rarr; void

Clear the canvas with the given parameters.

####Parameters
 | Name | Type | Description
---|---|---|---
 | color | any | 
 | backBuffer | boolean | 
 | depthStencil | boolean | 

###setViewport(viewport, requiredWidth, requiredHeight) &rarr; void

Set the WebGL's viewport

####Parameters
 | Name | Type | Description
---|---|---|---
 | viewport | [Viewport](/classes/2.2-alpha/Viewport) | 
optional | requiredWidth | number | 
optional | requiredHeight | number | 

###setDirectViewport(x, y, width, height) &rarr; void

Set the viewport of this engine. The cached viewport is cleared and the viewport takes exactly the size given in parameter.

####Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
 | width | number | 
 | height | number | 

###beginFrame() &rarr; void

Method used at the beginning of the frame rendering. Currently, measure the number of frames per seconds (FPS).
###endFrame() &rarr; void

Method used at the end of a frame rendering. Flushes the frame buffer of the canvas.
###resize() &rarr; void

resize the view according to the canvas' size.

@example

  window.addEventListener("resize", function () {

     engine.resize();

  });
###setSize(width, height) &rarr; void

force a specific size of the canvas

####Parameters
 | Name | Type | Description
---|---|---|---
 | width | number | 
 | height | number | 

###bindFramebuffer(texture) &rarr; void

Bind Frame buffer

####Parameters
 | Name | Type | Description
---|---|---|---
 | texture | WebGLTexture | 

###unBindFramebuffer(texture) &rarr; void

Unbind frame buffer

####Parameters
 | Name | Type | Description
---|---|---|---
 | texture | WebGLTexture | 

###flushFramebuffer() &rarr; void

Flushes the frame buffer
###restoreDefaultFramebuffer() &rarr; void

Restore the default frame buffer
###createVertexBuffer(vertices) &rarr; WebGLBuffer

Create a new vertex Buffer object

####Parameters
 | Name | Type | Description
---|---|---|---
 | vertices | number[] | 

###createDynamicVertexBuffer(capacity) &rarr; WebGLBuffer

Create a dynamic vertex buffer object

####Parameters
 | Name | Type | Description
---|---|---|---
 | capacity | number | 

###updateDynamicVertexBuffer(vertexBuffer, vertices, offset) &rarr; void

Updates the given dynamic vertex buffer object

####Parameters
 | Name | Type | Description
---|---|---|---
 | vertexBuffer | WebGLBuffer | 
 | vertices | any | 
optional | offset | number | 

###createIndexBuffer(indices) &rarr; WebGLBuffer

Create a new index buffer

####Parameters
 | Name | Type | Description
---|---|---|---
 | indices | number[] | 

###bindBuffers(vertexBuffer, indexBuffer, vertexDeclaration, vertexStrideSize, effect) &rarr; void

Bind buffer with the given vertexBuffer, indexBuffer, vertexDeclaration vertexStrideSize and effect

####Parameters
 | Name | Type | Description
---|---|---|---
 | vertexBuffer | WebGLBuffer | 
 | indexBuffer | WebGLBuffer | 
 | vertexDeclaration | number[] | 
 | vertexStrideSize | number | 
 | effect | [Effect](/classes/2.2-alpha/Effect) | 

###bindMultiBuffers(vertexBuffers, indexBuffer, effect) &rarr; void

Bind some buffers with the given vertexBuffer, indexBuffer and effect

####Parameters
 | Name | Type | Description
---|---|---|---
 | vertexBuffers | [VertexBuffer](/classes/2.2-alpha/VertexBuffer)[] | 
 | indexBuffer | WebGLBuffer | 
 | effect | [Effect](/classes/2.2-alpha/Effect) | 

###createInstancesBuffer(capacity) &rarr; WebGLBuffer

Create a dynamic instance buffer

####Parameters
 | Name | Type | Description
---|---|---|---
 | capacity | number | 

###deleteInstancesBuffer(buffer) &rarr; void

Delete an existing instance buffer

####Parameters
 | Name | Type | Description
---|---|---|---
 | buffer | WebGLBuffer | 

###updateAndBindInstancesBuffer(instancesBuffer, data, offsetLocations) &rarr; void

Update and bind the given instance buffer

####Parameters
 | Name | Type | Description
---|---|---|---
 | instancesBuffer | WebGLBuffer | 
 | data | Float32Array | 
 | offsetLocations | number[] | 

###unBindInstancesBuffer(instancesBuffer, offsetLocations) &rarr; void

Unbind the given instance buffer

####Parameters
 | Name | Type | Description
---|---|---|---
 | instancesBuffer | WebGLBuffer | 
 | offsetLocations | number[] | 

###applyStates() &rarr; void


###draw(useTriangles, indexStart, indexCount, instancesCount) &rarr; void

Draw

####Parameters
 | Name | Type | Description
---|---|---|---
 | useTriangles | boolean | 
 | indexStart | number | 
 | indexCount | number | 
optional | instancesCount | number | 

###drawPointClouds(verticesStart, verticesCount, instancesCount) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | verticesStart | number | 
 | verticesCount | number | 
optional | instancesCount | number | 

###createEffect(baseName, attributesNames, uniformsNames, samplers, defines, fallbacks, onCompiled, onError) &rarr; [Effect](/classes/2.2-alpha/Effect)

Compiled/linked your shaders into a simple object.

####Parameters
 | Name | Type | Description
---|---|---|---
 | baseName | any | 
 | attributesNames | string[] | 
 | uniformsNames | string[] | 
 | samplers | string[] | 
 | defines | string | 
optional | fallbacks | [EffectFallbacks](/classes/2.2-alpha/EffectFallbacks) | 
optional | onCompiled | (effect: [Effect](/classes/2.2-alpha/Effect)) =&gt; void | 
optional | onError | (effect: [Effect](/classes/2.2-alpha/Effect), errors: string) =&gt; void | 

###createEffectForParticles(fragmentName, uniformsNames, samplers, defines, fallbacks, onCompiled, onError) &rarr; [Effect](/classes/2.2-alpha/Effect)

Compiled/linked your shaders into a simple object.

####Parameters
 | Name | Type | Description
---|---|---|---
 | fragmentName | string | 
optional | uniformsNames | string[] | 
optional | samplers | string[] | 
optional | defines | string | 
optional | fallbacks | [EffectFallbacks](/classes/2.2-alpha/EffectFallbacks) | 
optional | onCompiled | (effect: [Effect](/classes/2.2-alpha/Effect)) =&gt; void | 
optional | onError | (effect: [Effect](/classes/2.2-alpha/Effect), errors: string) =&gt; void | 

###createShaderProgram(vertexCode, fragmentCode, defines) &rarr; WebGLProgram

Creates a shader program

####Parameters
 | Name | Type | Description
---|---|---|---
 | vertexCode | string | 
 | fragmentCode | string | 
 | defines | string | 

###getUniforms(shaderProgram, uniformsNames) &rarr; WebGLUniformLocation[]

Return the uniforms location for the given shader program

####Parameters
 | Name | Type | Description
---|---|---|---
 | shaderProgram | WebGLProgram | 
 | uniformsNames | string[] | 

###getAttributes(shaderProgram, attributesNames) &rarr; number[]

Return the attributes for the given shader program

####Parameters
 | Name | Type | Description
---|---|---|---
 | shaderProgram | WebGLProgram | 
 | attributesNames | string[] | 

###enableEffect(effect) &rarr; void

Enable effect

####Parameters
 | Name | Type | Description
---|---|---|---
 | effect | [Effect](/classes/2.2-alpha/Effect) | 

###setArray(uniform, array) &rarr; void

Set array of given shader

####Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation | 
 | array | number[] | 

###setArray2(uniform, array) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation | 
 | array | number[] | 

###setArray3(uniform, array) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation | 
 | array | number[] | 

###setArray4(uniform, array) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation | 
 | array | number[] | 

###setMatrices(uniform, matrices) &rarr; void

Set matrices for a given shader

####Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation | 
 | matrices | Float32Array | 

###setMatrix(uniform, matrix) &rarr; void

Set matrix for a given shader

####Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation | 
 | matrix | [Matrix](/classes/2.2-alpha/Matrix) | 

###setMatrix3x3(uniform, matrix) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation | 
 | matrix | Float32Array | 

###setMatrix2x2(uniform, matrix) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation | 
 | matrix | Float32Array | 

###setFloat(uniform, value) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation | 
 | value | number | 

###setFloat2(uniform, x, y) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation | 
 | x | number | 
 | y | number | 

###setFloat3(uniform, x, y, z) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation | 
 | x | number | 
 | y | number | 
 | z | number | 

###setBool(uniform, bool) &rarr; void

Set bool for this given shader

####Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation | 
 | bool | number | 

###setFloat4(uniform, x, y, z, w) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation | 
 | x | number | 
 | y | number | 
 | z | number | 
 | w | number | 

###setColor3(uniform, color3) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation | 
 | color3 | [Color3](/classes/2.2-alpha/Color3) | 

###setColor4(uniform, color3, alpha) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | uniform | WebGLUniformLocation | 
 | color3 | [Color3](/classes/2.2-alpha/Color3) | 
 | alpha | number | 

###setState(culling, zOffset, force) &rarr; void

Set the culling state (true : front faces are visible. If cullBackFaces is set to true, back and front faces are visible).

####Parameters
 | Name | Type | Description
---|---|---|---
 | culling | boolean | 
optional | zOffset | number | 
optional | force | boolean | 

###setDepthBuffer(enable) &rarr; void

Enable or disable the depth buffer

####Parameters
 | Name | Type | Description
---|---|---|---
 | enable | boolean | 

###getDepthWrite() &rarr; boolean

Get the depth mask
###setDepthWrite(enable) &rarr; void

Enables or disables the depth mask

####Parameters
 | Name | Type | Description
---|---|---|---
 | enable | boolean | 

###setColorWrite(enable) &rarr; void

Enables or disables the writing or red, blue, green and alpha

####Parameters
 | Name | Type | Description
---|---|---|---
 | enable | boolean | 

###setAlphaMode(mode) &rarr; void

Set the engine alpha mode

####Parameters
 | Name | Type | Description
---|---|---|---
 | mode | number | 

###getAlphaMode() &rarr; number


###setAlphaTesting(enable) &rarr; void

Enables or disables the alpha testing

####Parameters
 | Name | Type | Description
---|---|---|---
 | enable | boolean | 

###getAlphaTesting() &rarr; boolean

Returns true if the alpha testing is enabled, false otherwise.
###wipeCaches() &rarr; void

Reset the cache
###setSamplingMode(texture, samplingMode) &rarr; void

Set the default texture sampling mode

####Parameters
 | Name | Type | Description
---|---|---|---
 | texture | WebGLTexture | 
 | samplingMode | number | 

###createTexture(url, noMipmap, invertY, scene, samplingMode, onLoad, onError, buffer) &rarr; WebGLTexture

Create a new texture

####Parameters
 | Name | Type | Description
---|---|---|---
 | url | string | 
 | noMipmap | boolean | 
 | invertY | boolean | 
 | scene | [Scene](/classes/2.2-alpha/Scene) | 
optional | samplingMode | number | 
optional | onLoad | () =&gt; void | 
optional | onError | () =&gt; void | 
optional | buffer | any | 

###updateRawTexture(texture, data, format, invertY) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | texture | WebGLTexture | 
 | data | ArrayBufferView | 
 | format | number | 
 | invertY | boolean | 

###createRawTexture(data, width, height, format, generateMipMaps, invertY, samplingMode) &rarr; WebGLTexture



####Parameters
 | Name | Type | Description
---|---|---|---
 | data | ArrayBufferView | 
 | width | number | 
 | height | number | 
 | format | number | 
 | generateMipMaps | boolean | 
 | invertY | boolean | 
 | samplingMode | number | 

###createDynamicTexture(width, height, generateMipMaps, samplingMode, forceExponantOfTwo) &rarr; WebGLTexture

Create a new dynamic texture

####Parameters
 | Name | Type | Description
---|---|---|---
 | width | number | 
 | height | number | 
 | generateMipMaps | boolean | 
 | samplingMode | number | 
optional | forceExponantOfTwo | boolean | 

###updateTextureSamplingMode(samplingMode, texture) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | samplingMode | number | 
 | texture | WebGLTexture | 

###updateDynamicTexture(texture, canvas, invertY) &rarr; void

Update the given dynamic texture

####Parameters
 | Name | Type | Description
---|---|---|---
 | texture | WebGLTexture | 
 | canvas | HTMLCanvasElement | 
 | invertY | boolean | 

###updateVideoTexture(texture, video, invertY) &rarr; void

Update the given dynamic texture with the video given in parameter

####Parameters
 | Name | Type | Description
---|---|---|---
 | texture | WebGLTexture | 
 | video | HTMLVideoElement | 
 | invertY | boolean | 

###createRenderTargetTexture(size, options) &rarr; WebGLTexture

Create a new render target texture
old version had a &quot;generateMipMaps&quot; arg instead of options.
if options.generateMipMaps is undefined, consider that options itself if the generateMipmaps value
in the same way, generateDepthBuffer is defaulted to true

####Parameters
 | Name | Type | Description
---|---|---|---
 | size | any | 
 | options | any | 

###createCubeTexture(rootUrl, scene, extensions, noMipmap) &rarr; WebGLTexture

Create a new cube texture

####Parameters
 | Name | Type | Description
---|---|---|---
 | rootUrl | string | 
 | scene | [Scene](/classes/2.2-alpha/Scene) | 
 | extensions | string[] | 
optional | noMipmap | boolean | 

###bindSamplers(effect) &rarr; void

Bind the given effect to samplers

####Parameters
 | Name | Type | Description
---|---|---|---
 | effect | [Effect](/classes/2.2-alpha/Effect) | 

###setTextureFromPostProcess(channel, postProcess) &rarr; void

Set texture from post process

####Parameters
 | Name | Type | Description
---|---|---|---
 | channel | number | 
 | postProcess | [PostProcess](/classes/2.2-alpha/PostProcess) | 

###setTexture(channel, texture) &rarr; void

The index in the array _activeTexturesCache

####Parameters
 | Name | Type | Description
---|---|---|---
 | channel | number | 
 | texture | [BaseTexture](/classes/2.2-alpha/BaseTexture) | 

###readPixels(x, y, width, height) &rarr; Uint8Array

Read pixels in the given rectangle

####Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
 | width | number | 
 | height | number | 

###dispose() &rarr; void

Delete this engine. Calls dispose on each of the registered scene and deletes all shaders
###displayLoadingUI() &rarr; void

Display loading User Interface
###hideLoadingUI() &rarr; void

Hide the loading state to the User Interface
###getFps() &rarr; number


###getDeltaTime() &rarr; number


###static isSupported() &rarr; boolean


