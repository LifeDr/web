import {on, reducer} from "$lib/adorable"
import {_내_비교함에_담기, _내_비교함에서_빼기_id, _내_비교함에서_빼기_name} from "../actions"
import type {Item} from "./items$"

export const myItems$ = reducer<Item[]>([], "myItems$", (_myItems) => {
  on(_내_비교함에서_빼기_id)
    .map(({id}) => {
      if (id === 0) return _myItems.value.slice(1)
      else return _myItems.value.splice(id - 1, 1)
    })
    .writeTo(_myItems)

  on(_내_비교함에서_빼기_name)
    .map(({name}) => _myItems.value.filter((item) => item.name !== name))
    .writeTo(_myItems)

  on(_내_비교함에_담기)
    .filter(({name}) => _myItems.value.length < 4 && _myItems.value.findIndex((item) => item.name === name) === -1)
    .map((item) => [..._myItems.value, item])
    .writeTo(_myItems)
})
