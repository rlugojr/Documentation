---
ID_PAGE: 25334
PG_TITLE: Tags
PG_VERSION: 2.1
---
##Description

class [Tags](/classes/2.2-alpha/Tags)



##Methods

###static EnableFor(obj) &rarr; void

Enable the tag system for the given object.

####Parameters
 | Name | Type | Description
---|---|---|---
 | obj | any | 

###static DisableFor(obj) &rarr; void

Disable the tag system for the given object

####Parameters
 | Name | Type | Description
---|---|---|---
 | obj | any | 

###static HasTags(obj) &rarr; boolean

True if given object has tags, false otherwise

####Parameters
 | Name | Type | Description
---|---|---|---
 | obj | any | 

###static GetTags(obj) &rarr; any

Get tags

####Parameters
 | Name | Type | Description
---|---|---|---
 | obj | any | 

###static AddTagsTo(obj, tagsString) &rarr; void

Add tags

####Parameters
 | Name | Type | Description
---|---|---|---
 | obj | any | 
 | tagsString | string | 

###static RemoveTagsFrom(obj, tagsString) &rarr; void

Remove the list of tag to the given object

####Parameters
 | Name | Type | Description
---|---|---|---
 | obj | any | 
 | tagsString | string | 

###static MatchesQuery(obj, tagsQuery) &rarr; boolean



####Parameters
 | Name | Type | Description
---|---|---|---
 | obj | any | 
 | tagsQuery | string | 

