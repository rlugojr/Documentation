---
ID_PAGE: 24613
PG_TITLE: Collection<T>
PG_VERSION: 1.14
---

Create an array
##new Collection&lt;T&gt;()

The collection constructor



##Methods

###Count() &rarr; number
Return the count


###add&lt;T&gt;(key, item) &rarr; number
Create a new element into collection with the given key and item.

####Parameters
 | Name | Type | Description
---|---|---|---
 | key | string | The given key
 | item | T | The given item
---

###remove(key) &rarr; number
Remove the item for this given key.

####Parameters
 | Name | Type | Description
---|---|---|---
 | key | string | the given key
---

###item(key) &rarr; any
Return the collection for this given key

####Parameters
 | Name | Type | Description
---|---|---|---
 | key | string | the given key
---

###forEach&lt;T&gt;(block) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | block | (item: T) =&gt; void | @param block
---
