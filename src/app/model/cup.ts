type ColorType = {
  name: string;
  code: string;
};


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

  stemType: string;
  stemLength: any;
  
  material: string;
  totalCapacity: any;
  airholeCapacity: string;  
  airholeType: string;
}
