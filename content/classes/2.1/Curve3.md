---
ID_PAGE: 6766
PG_TITLE: Curve3
PG_VERSION: 2.1
---
##new [Curve3](page.php?p=6766)(points)

####Parameters
 | Name | Type | Description
---|---|---|---
 | points | [Vector3](page.php?p=6751)[] | 
---



##Methods

###static CreateQuadraticBezier(v0, v1, v2, nbPoints) &rarr; [Curve3](page.php?p=6766)

####Parameters
 | Name | Type | Description
---|---|---|---
 | v0 | [Vector3](page.php?p=6751) | 
 | v1 | [Vector3](page.php?p=6751) | 
 | v2 | [Vector3](page.php?p=6751) | 
 | nbPoints | number | 
---

###static CreateCubicBezier(v0, v1, v2, v3, nbPoints) &rarr; [Curve3](page.php?p=6766)

####Parameters
 | Name | Type | Description
---|---|---|---
 | v0 | [Vector3](page.php?p=6751) | 
 | v1 | [Vector3](page.php?p=6751) | 
 | v2 | [Vector3](page.php?p=6751) | 
 | v3 | [Vector3](page.php?p=6751) | 
 | nbPoints | number | 
---

###static CreateHermiteSpline(p1, t1, p2, t2, nbPoints) &rarr; [Curve3](page.php?p=6766)

####Parameters
 | Name | Type | Description
---|---|---|---
 | p1 | [Vector3](page.php?p=6751) | 
 | t1 | [Vector3](page.php?p=6751) | 
 | p2 | [Vector3](page.php?p=6751) | 
 | t2 | [Vector3](page.php?p=6751) | 
 | nbPoints | number | 
---

###getPoints() &rarr; [Vector3](page.php?p=6751)[]


###length() &rarr; number


###continue(curve) &rarr; [Curve3](page.php?p=6766)

####Parameters
 | Name | Type | Description
---|---|---|---
 | curve | [Curve3](page.php?p=6766) | 
---
