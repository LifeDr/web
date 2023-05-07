import { action } from "$lib/adorable";

export const _상태 = action<boolean>("_상태");
export const _내_비교함에서_빼기 = action<{ id: number }>(
  "_내_비교함에서_빼기"
);
