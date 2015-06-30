---
ID_PAGE: 5837
PG_TITLE: ParticleSystem
PG_VERSION: 2.0
---
##new [ParticleSystem](page.php?p=5837)(name, capacity, scene, customEffect)




####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | name of the particle system
 | capacity | number | The total number of particles contained into the particle system
 | scene | [Scene](page.php?p=5725) | The scene of the particle system
optional | customEffect | [Effect](page.php?p=5782) | The reference to a shader effect for the particles, overriding the default shader
---

##Members

###name : string



The particle system name


###static BLENDMODE_ONEONE : number



The source color is added to the destination color without alpha affecting the result


###static BLENDMODE_STANDARD : number



Blend current color and particle color using particle&rsquo;s alpha


###id : string



The particle system id


###renderingGroupId : number



The rendering group ID. default : 0


###emitter : any



The particle emitter, where the particle comes from


###emitRate : number



The particle emit rate. default : 10


###manualEmitCount : number



Emit only a specific number of particles at once, in a &quot;one shot&quot;


###updateSpeed : number



The overall motion speed default : 0.01


###targetStopDuration : number



The amount of time the particle system is running


###disposeOnStop : boolean



Disposes (or not) the particle system on stop


###minEmitPower : number



Minimum power of emitting particles


###maxEmitPower : number



Maximum power of emitting particles


###minLifeTime : number



Minimum life time of particle


###maxLifeTime : number



Maximum life time of particle


###minSize : number



Minimum size of particle


###maxSize : number



Maximum size of particle


###minAngularSpeed : number



Minimum angular speed of particle in radian


###maxAngularSpeed : number



Maximum angular speed of particle in radian


###particleTexture : [Texture](page.php?p=5790)



The particle texture


###onDispose : () =&gt; void



The action to perform on dispose


###updateFunction : (particles: [Particle](page.php?p=5836)[]) =&gt; void


###blendMode : number



The selected mode for particles : BLENDMODE_ONEONE or BLENDMODE_STANDARD


###forceDepthWrite : boolean



default : false


###gravity : [Vector3](page.php?p=5808)



The gravity of the particle to give an orientation to the particle


###direction1 : [Vector3](page.php?p=5808)



Random direction of each particle emitted between direction1 and direction2


###direction2 : [Vector3](page.php?p=5808)



Random direction of each particle emitted between direction1 and direction2


###minEmitBox : [Vector3](page.php?p=5808)



Begining of the box emitting the particles


###maxEmitBox : [Vector3](page.php?p=5808)



Ending of the box emitting the particles


###color1 : [Color4](page.php?p=5806)



First color to be combined to produce the particle color


###color2 : [Color4](page.php?p=5806)



Second color to be combined to produce the particle color


###colorDead : [Color4](page.php?p=5806)



Color taken by the particle just before it disappears


###textureMask : [Color4](page.php?p=5806)



Mask used to filter a texture color


###startDirectionFunction : (emitPower: number, worldMatrix: [Matrix](page.php?p=5811), directionToUpdate: [Vector3](page.php?p=5808)) =&gt; void




###startPositionFunction : (worldMatrix: [Matrix](page.php?p=5811), positionToUpdate: [Vector3](page.php?p=5808)) =&gt; void









##Methods

###recycleParticle(particle) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | particle | [Particle](page.php?p=5836) | 
---

###getCapacity() &rarr; number
Returns the capacity of the particle system




###isAlive() &rarr; boolean
Returns if the particle system is alive




###isStarted() &rarr; boolean
Returns if the particle system is started




###start() &rarr; void
Starts the particle system




###stop() &rarr; void
Stops the particle system




###animate() &rarr; void
Animates the particle system




###render() &rarr; number




###dispose() &rarr; void
Destroyes this particle system




###clone(name, newEmitter) &rarr; [ParticleSystem](page.php?p=5837)

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The name of the cloned [ParticleSystem](page.php?p=5837)
 | newEmitter | any | The given new emitter
---
