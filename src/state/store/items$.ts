import { reducer } from "$lib/adorable";

const items = [
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
  {
    imgUrl:
      "https://kalovis.com/web/product/big/202203/d72cb5e59dc77f3e48a4bd4c6396696b.png",
    brand: "Kalovis",
    name: "킬로톡 피치맛",
    grade: "A",
    funcCert: true,
    HACCP: true,
    GMP: true,
    mainCert: "탄수화물 흡수 억제",
    subCert: "배변활동보조",
    daily: "가르시니아 100mg",
    harmful: "없음",
  },
  {
    imgUrl: "https://via.placeholder.com/150",
    brand: "브랜드",
    name: "제품명",
    grade: "A",
    funcCert: true,
    HACCP: true,
    GMP: true,
    mainCert: "탄수화물 흡수 억제",
    subCert: "배변활동보조",
    daily: "가르시니아 100mg",
    harmful: "없음",
  },
  {
    imgUrl: "https://via.placeholder.com/150",
    brand: "브랜드",
    name: "제품명",
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

export type Item = {
  imgUrl: string;
  brand: string;
  name: string;
  grade: string;
  funcCert: boolean;
  HACCP: boolean;
  GMP: boolean;
  mainCert: string;
  subCert: string;
  daily: string;
  harmful: string;
};

export const items$ = reducer<Item[]>(items, "items$", (_items) => {});
