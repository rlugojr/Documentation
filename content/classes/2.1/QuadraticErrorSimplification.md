---
ID_PAGE: 6780
PG_TITLE: QuadraticErrorSimplification
PG_VERSION: 2.1
---

An implementation of the Quadratic Error simplification algorithm.

Original paper : http://www1.cs.columbia.edu/~cs4162/html05s/garland97.pdf

Ported mostly from QSlim and http://voxels.blogspot.de/2014/05/quadric-mesh-simplification-with-source.html to babylon JS

@author RaananW
##new [QuadraticErrorSimplification](page.php?p=6780)(_mesh)




####Parameters
 | Name | Type | Description
---|---|---|---
 | _mesh | [Mesh](page.php?p=6659) | 
---

##Members

###syncIterations : number




###aggressiveness : number




###decimationIterations : number







###boundingBoxEpsilon : number




##Methods

###simplify(settings, successCallback) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | settings | ISimplificationSettings | 
 | successCallback | (simplifiedMesh: [Mesh](page.php?p=6659)) =&gt; void | 
---
