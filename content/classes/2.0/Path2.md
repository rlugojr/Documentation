---
ID_PAGE: 5821
PG_TITLE: Path2
PG_VERSION: 2.0
---
##new [Path2](page.php?p=5821)(x, y)

####Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
---

##Members

###closed : boolean




##Methods

###addLineTo(x, y) &rarr; [Path2](page.php?p=5821)

####Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
---

###addArcTo(midX, midY, endX, endY, numberOfSegments) &rarr; [Path2](page.php?p=5821)

####Parameters
 | Name | Type | Description
---|---|---|---
 | midX | number | 
 | midY | number | 
 | endX | number | 
 | endY | number | 
optional | numberOfSegments | number | 
---

###close() &rarr; [Path2](page.php?p=5821)


###length() &rarr; number


###getPoints() &rarr; [Vector2](page.php?p=5807)[]


###getPointAtLengthPosition(normalizedLengthPosition) &rarr; [Vector2](page.php?p=5807)

####Parameters
 | Name | Type | Description
---|---|---|---
 | normalizedLengthPosition | number | 
---

###static StartingAt(x, y) &rarr; [Path2](page.php?p=5821)

####Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
---
