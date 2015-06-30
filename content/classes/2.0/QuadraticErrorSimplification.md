---
ID_PAGE: 5831
PG_TITLE: QuadraticErrorSimplification
PG_VERSION: 2.0
---

An implementation of the Quadratic Error simplification algorithm.

Original paper : http://www1.cs.columbia.edu/~cs4162/html05s/garland97.pdf

Ported mostly from QSlim and http://voxels.blogspot.de/2014/05/quadric-mesh-simplification-with-source.html to babylon JS

@author RaananW
##new [QuadraticErrorSimplification](page.php?p=5831)(_mesh)

####Parameters
 | Name | Type | Description
---|---|---|---
 | _mesh | [Mesh](page.php?p=5722) | 
---

##Members

###syncIterations : number


###aggressiveness : number


###decimationIterations : number




##Methods

###simplify(settings, successCallback) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | settings | ISimplificationSettings | 
 | successCallback | (simplifiedMeshes: [Mesh](page.php?p=5722)) =&gt; void | 
---
