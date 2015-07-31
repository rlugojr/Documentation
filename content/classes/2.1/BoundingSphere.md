---
ID_PAGE: 6715
PG_TITLE: BoundingSphere
PG_VERSION: 2.1
TAGS:
    - Mesh
    - Bounding
---

Create a bounding sphere for the given mesh
##new [BoundingSphere](page.php?p=6715)(minimum, maximum)



The [BoundingSphere](page.php?p=6715) constructor




####Parameters
 | Name | Type | Description
---|---|---|---
 | minimum | [Vector3](page.php?p=6751) | The minimum of the sphere
 | maximum | [Vector3](page.php?p=6751) | The maximum of the sphere
---

##Members

###minimum : [Vector3](page.php?p=6751)




The minimum size of the bounding sphere



###maximum : [Vector3](page.php?p=6751)




The minimum of the bounding sphere



###center : [Vector3](page.php?p=6751)




The center of the bounding sphere



###radius : number




The radius of the bounding sphere



###centerWorld : [Vector3](page.php?p=6751)






###radiusWorld : number














##Methods

###isInFrustum(frustumPlanes) &rarr; boolean
Check if the boundingSphere is in frustum





####Parameters
 | Name | Type | Description
---|---|---|---
 | frustumPlanes | [Plane](page.php?p=6755)[] | the frustum planes
---

###intersectsPoint(point) &rarr; boolean
Check if this bounding sphere intersect the point given in parameter





####Parameters
 | Name | Type | Description
---|---|---|---
 | point | [Vector3](page.php?p=6751) | The point
---

###static Intersects(sphere0, sphere1) &rarr; boolean

####Parameters
 | Name | Type | Description
---|---|---|---
 | sphere0 | [BoundingSphere](page.php?p=6715) | The first sphere
 | sphere1 | [BoundingSphere](page.php?p=6715) | The second sphere
---
