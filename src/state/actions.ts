import {action} from "$lib/adorable"
import type {Item} from "./store"

export const _상태 = action<boolean>("_상태")
export const _내_비교함에서_빼기_id = action<{id: number}>("_내_비교함에서_빼기_id")
export const _내_비교함에서_빼기_name = action<{name: string}>("_내_비교함에서_빼기_name")
export const _내_비교함에_담기 = action<Item>("_내_비교함에_담기")
