export interface Book {
  kind?: string;
  id: string;
  etag?: string;
  selfLink?: string;
  volumeInfo: VolumeInfo;
  saleInfo: SaleInfo;
  accessInfo: AccessInfo;
  searchInfo: SearchInfo;
}

export interface VolumeInfo {
  title: string;
  authors: Array<string>;
  publisher: string;
  publishDate?: string;
  description?: string;
  industryIdentifiers?: Array<Identifier>;
  readingModes?: Mode;
  pageCount?: number;
  printType?: string;
  categories?: Array<string>;
  maturityRating?: string;
  allowAnonLogging?: boolean;
  contentVersion?: string;
  panelizationSummary?: Panelization;
  imageLinks?: Links;
  language?: string;
  previewLink?: string;
  infoLink?: string;
  canonicalVolumeLink?: string;
}

export interface SaleInfo {
  country?: string;
  saleability?: string;
  isEbook?: boolean;
  listPrice?: Pricing;
  retailPrice?: Pricing;
  buyLink?: string;
  offers?: Array<Offer>;
}

export interface AccessInfo {
  country?: string
  viewability?: string;
  embeddable?: boolean;
  publicDomain?: boolean;
  textToSpeechPermission?: string;
  epub?: Ebup;
  pdf?: PDF;
  webReaderLink?: string;
  accessViewStatus?: string;
  quoteSharingAllowed?: boolean;
}

export interface SearchInfo {
  textSnippet?: string;
}

export type Identifier = {
  type: string,
  identifier: string,
}

export type Mode = {
  text: boolean,
  image: boolean,
}

export type Panelization = {
  containsEpubBubbles: boolean,
  containsImageBubbles: boolean,
}

export type Links = {
  smallThumbnail: string,
  thumbnail: string,
}

export type Pricing = {
  amount: number,
  currencyCode: string,
}

export type Offer = {
  finskyOfferType: number,
  listPrice: {
    amountInMicros: number,
    currencyCode: string,
  },
  retailPrice: {
    amountInMicros: number,
    currencyCode: string,
  }
}

export type Ebup = {
  isAvailable: boolean,
}

export type PDF = {
  isAvailable: boolean,
  acsTokenLink: string,
}
