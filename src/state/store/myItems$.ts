import { on, reducer } from "$lib/adorable";
import { _내_비교함에서_빼기 } from "../actions";
import type { Item } from "./items$";

const initData = [
  {
    imgUrl:
      "https://grnplus.co.kr/web/product/big/202304/284de7f50d500928498d1c5da9dceab4.jpg",
    brand: "GRN",
    name: "슬림밸런스 분홍이",
    grade: "A",
    funcCert: false,
    HACCP: true,
    GMP: true,
    mainCert: "탄수화물 흡수 억제",
    subCert: "배변활동보조",
    daily: "가르시니아 100mg",
    harmful: "없음",
  },
  {
    imgUrl: "https://cdn.imweb.me/thumbnail/20221222/e6c05b6129cd8.png",
    brand: "NCA",
    name: "클린 밸런스",
    grade: "A",
    funcCert: true,
    HACCP: true,
    GMP: true,
    mainCert: "탄수화물 흡수 억제",
    subCert: "배변활동보조",
    daily: "가르시니아 100mg",
    harmful: "없음",
  },
];

export const myItems$ = reducer<Item[]>(initData, "myItems$", (_myItems) => {
  on(_내_비교함에서_빼기)
    .map(({ id }) => {
      if (id === 0) return _myItems.value.slice(1);
      else return _myItems.value.splice(id - 1, 1);
    })
    .writeTo(_myItems);
});
