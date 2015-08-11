---
ID_PAGE: 24518
PG_TITLE: EffectFallbacks
PG_VERSION: 1.14
---

##Members

###isMoreFallbacks : boolean


Returns true if the current rank value is lower than or equal to the max rank value, false otherwise



##Methods

###addFallback(rank, define) &rarr; void
Adds a fallback effect to the given rank

####Parameters
 | Name | Type | Description
---|---|---|---
 | rank | number | The given rank
 | define | string | The definition of the fallback
---

###reduce(currentDefines) &rarr; string
Removes the current fallbacks from the given defines

####Parameters
 | Name | Type | Description
---|---|---|---
 | currentDefines | string | The given defines
---
