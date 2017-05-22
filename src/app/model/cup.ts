type ColorType = {
  name: string;
  code: string;
};

type StemType = {
  name: string;
  name_eng: string;
  isNonSlip: boolean;
}

export class Cup {
  id: number;
  name: string;
  name_eng: string;
  imgUrls: string;
  size: any;
  size_eng: any;
    
  color?: ColorType[];
  officialsite: string;
  country: string;
  country_eng: string;
  price: string;

  externalDiameter: number;
  totalLength: number;
  bodyLength: number;
  topToHole: string;

  stemType?: StemType;
  stemLength: any;
  
  material: string;
  totalCapacity: any;
  airholeCapacity: string;  
  airholeType: string;
}
