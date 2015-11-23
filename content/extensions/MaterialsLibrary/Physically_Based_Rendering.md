# PBR Materials

## Introduction
After following the [standard material tutorial](http://doc.babylonjs.com/tutorials/04._Materials) and also excelling in [unleashing its power](http://blogs.msdn.com/b/eternalcoding/archive/2013/07/01/babylon-js-unleash-the-standardmaterial-for-your-babylon-js-game.aspx), it is a good time to go further and look at another emerging kind of materials called **PBR Materials** standing for **Physically Based Rendering Materials**.

![Elements](/img/extensions/materials/PBRMaterial.png)

[**Playground Demo Scene - PBR Materials**](http://babylonjs-playground.com/#ESBZC)

## What is the point ?!?
PBR rendering techniques are aiming to get closer from **real life lighting**.

PBR is grouping a sets of techniques but does not force you to choose one in particular. For this material we choose to mix a few techniques from [Disney](http://blog.selfshadow.com/publications/s2012-shading-course/burley/s2012_pbs_disney_brdf_slides_v2.pdf), [Ashkimin Shirley BRDF](http://www.cs.utah.edu/~shirley/papers/jgtbrdf.pdf) and [Ashkimin Shirley Microfacets](http://www.cs.utah.edu/~shirley/papers/facets.pdf).

To name a few things this material is addressing:
1. [Gamma Correction](https://en.wikipedia.org/wiki/Gamma_correction)
2. [HDR](https://en.wikipedia.org/wiki/High-dynamic-range_rendering)
3. [Integrated Fresnel](http://viscorbel.com/vray-materials-theory/)
4. [Monochrome Energy Conservation](http://www.neilblevins.com/cg_education/energy_conservation/energy_conservation.htm)
5. [Glossiness and Reflectivity](http://viscorbel.com/vray-materials-theory/)

Enjoying the [**KISS principle**](https://en.wikipedia.org/wiki/KISS_principle), the overall idea of the new Babylon material is to reduce the set of usually available parameters to make it more **developer friendly** but still keeping enough control. For some offline renderers, the number of scalar parameters can be huge but even if they all have their place, they can sometimes be tricky to use and hard to manage due to the overall number of possible combinations.

You can also refer to this video for a short but really helpful introduction to [PBR](https://www.youtube.com/watch?v=7NjGETJMZvY) from Crytek.

## How can I do this ?
As you are already really familiar with the Babylon Standard Material now, we'll only try to address here the main differences and as the simplest setup, your only changes will be to instantiate a **PBRMaterial** instead of a **StandardMaterial**.

```javascript
var pbr = new BABYLON.PBRMaterial("pbr", scene);
```

And apply this material to the object of your choice, e.g.:
```javascript
sphere.material = pbr;
```
Or, create and apply all in one step:
```javascript
sphere.material = new BABYLON.PBRMaterial("pbr", scene);
```

> "So how can I adjust my material to give the perfect look to my object?""

That is done by setting the properties on the material. Let's see what the new PBR parameters are:

* **Glossiness** (AKA specular power)

The glossiness of a material defines **the way it is reflecting** the incoming lights. It is not defining the amount, only how. Glossy material will tend to reflect the light in the same way it is incoming. On a Mat one, the reflected light will vary in contact of the surface. As I can easily understand the confusion of my explanation, let's take a look at the following example (and for more Physically Based Knowledge, [follow the link](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC2538579/)):

![Elements](/img/extensions/materials/PBRMaterialGlossiness.png)

As you can see here, the more glossy the material is (going left to right: 0.5 to 1) the less blurry the reflected environment is.

[**Playground Demo Scene - PBR Glossiness**](http://babylonjs-playground.com/#1LZALU#1)

```javascript
var x = 0;
var specular = 0.7;
for (var j = 0; j < 6; j++) {
	var glossiness = j / 5;
		
	//Creation of a sphere
	var sphere = BABYLON.Mesh.CreateSphere("Sphere_" + j, 10.0, 9.0, scene);
	sphere.position.x = x;
		
	//Creation of a material
	var materialSphere = new BABYLON.PBRMaterial("Material_" + j, scene);
	materialSphere.diffuseColor = new BABYLON.Color3(0.2, 0.9, 1.0);
	materialSphere.specularColor = new BABYLON.Color3(specular, specular, specular);
	materialSphere.glossiness = glossiness;

	//Attach the material to the sphere
	sphere.material = materialSphere;

	x = x - 15;
}
```

**Tips:** To achieve the best results, you can store the glossiness in the alpha channel of the specular map (this prevents having a constant gloss on one material):
```javascript
materialSphere.specularTexture = texture;
materialSphere.useGlossinessFromSpecularMap = true;
```

* **Specular** (AKA reflectivity)

The specular of a material defines the **amount of light it is reflecting**. Basically, a black specular will mean almost no reflection and White will be close from a perfect mirror:

![Elements](/img/extensions/materials/PBRMaterialSpecular.png)

As you can see here, the more specular the material is (going left to right from white to black) the closer from a perfect mirror it is.

[**Playground Demo Scene - PBR Specular**](http://babylonjs-playground.com/#PRRBS)

```javascript
var x = 0;
var glossiness = 0.98;
for (var j = 0; j < 6; j++) {
	var specular = j / 5;
		
	//Creation of a sphere
	var sphere = BABYLON.Mesh.CreateSphere("Sphere_" + j, 10.0, 9.0, scene);
	sphere.position.x = x;
		
	//Creation of a material
	var materialSphere = new BABYLON.PBRMaterial("Material_" + j, scene);
	materialSphere.diffuseColor = new BABYLON.Color3(0.2, 0.9, 1.0);
	materialSphere.specularColor = new BABYLON.Color3(specular, specular, specular);
	materialSphere.glossiness = glossiness;

	//Attach the material to the sphere
	sphere.material = materialSphere;

	x = x - 15;
}
```

**Tips:** To achieve the best results, use a specular map stored in a texture:
```javascript
materialSphere.specularTexture = texture;
```

* **Reflection**

One of the main point of the PBR material is to **conserve the energy** (not emitting more lights than it receives). It then means that if a lot of lights is reflected from the environment, the diffuse reflected light will drop. This means that without Reflection Map the material would be Black if the specular is close to white (reflecting nothing). This is why we introduce in the material a **Reflection Color** parameter to ensure the material still works without Reflection texture.

```javascript
var pbr = new BABYLON.PBRMaterial("pbr", scene);
pbr.reflectionColor = new BABYLON.Color3(1.0, 0.0, 0.0);
```

**Tips:** To achieve the best results, use a reflection texture created from the new reflection probes:
```javascript
pbr.specularTexture = texture;
```

![Elements](/img/extensions/materials/PBRMaterialReflection.png)

You can see here all the elements being lit by the reflection map. Playing with the specular color and glossiness can also achieve interesting results as you can see on the different meshes.

[**Playground Demo Scene - PBR Reflection**](http://www.babylonjs-playground.com/#1HQPOD)

* **Overloaded Values**

In order to **simplify debugging** and also to **create animation effects**, a bunch of overloaded parameters are available in the material. All of them are controlled by an intensity parameter going from 0 to 1. It specifies how much the overloaded value is use... (not sure I am clear enough to be honest, let's try again) The intensity value is the gradient amount between the actual value and the overloaded one (still not clear?, let's see it on a picture):

![Elements](/img/extensions/materials/PBRMaterialOverloadedValues.png)

As you can see, the texture is being more and more overridden by an overloaded diffuse color when the overloaded diffuse intensity increases (from left to right and 0 to 1).

[**Playground Demo Scene - PBR Overloaded Values**](http://babylonjs-playground.com/#1GELZQ#1)

```javascript
var x = 0;
for (var j = 0; j < 6; j++) {
	var overloadedIntensity = j / 5;
		
	//Creation of a sphere
	var sphere = BABYLON.Mesh.CreateSphere("Sphere_" + j, 10.0, 9.0, scene);
	sphere.position.x = x;
		
	//Creation of a material
	var materialSphere = new BABYLON.PBRMaterial("Material_" + j, scene);
	materialSphere.diffuseTexture = new BABYLON.Texture("Textures/Amiga");
	materialSphere.overloadedDiffuse = new BABYLON.Color3(0, 0, 1);
	materialSphere.overloadedDiffuseIntensity = overloadedIntensity;

	//Attach the material to the sphere
	sphere.material = materialSphere;

	x = x - 15;
}
```

All the overloaded properties are beginning by overloaded to easily find them in the PBRMaterial class.

## Camera Control (In the material... WTF ?)

One of the outstanding WebGL issue is the lack of MSAA on texture render target... **Aghhhhhh!** (feel better now). This prevents an easy use of post processing still keeping a good looking scene. Also the use of full float render textures with filtering is still not the norm everywhere... (sigh)

In order to work around those issues and increase performances, we integrated as part of the material two optional controls for both **contrast and exposure**. This enables you to do photographic tone mapping and deals with the contrast directly from the material.

```javascript
var pbr = new BABYLON.PBRMaterial("pbr", scene);
pbr.cameraExposure = 0.66;
pbr.cameraContrast = 1.66;
```

![Elements](/img/extensions/materials/PBRMaterialCamera.png)

This highlights the impact of both contrast and exposure on a model (all the other parameters are fixed).

[**Playground Demo Scene - PBR Camera**](http://babylonjs-playground.com/#1Y4YAM#1)

## Gamma Correction

In order to ensure the lights equations are working accurately, the PBR material could be called "Gamma Correct" in the way all the inputs requiring correction are converted to **linear space** before working with them and then finally encoded back in **Gamma Space** before rendering.

This process is totally transparent for the user but it is still good to know it takes place in the material (could avoid you headache searching why it is all dark or bright if you were for instance planning to use linear input and decode in a post process).

## Where are my Fresnels?

As PBR material are based on a good **light distribution** (closest to real life lighting), the diffuse, specular and reflection fresnels are not optional anymore. They are one of the central point of the material and integrated in all cases.

They are **automatically created** and configured based on the other inputs passed through the material. You then do not need to configure them hence why we removed them from the material.

The emissive and opacity fresnels being closer from tooling are still available in this material.
