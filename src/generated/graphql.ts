import gql from 'graphql-tag';
import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: any;
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: any;
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: any;
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: any;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']>;
  contentType_contains?: InputMaybe<Scalars['String']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentType_not?: InputMaybe<Scalars['String']>;
  contentType_not_contains?: InputMaybe<Scalars['String']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName?: InputMaybe<Scalars['String']>;
  fileName_contains?: InputMaybe<Scalars['String']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName_not?: InputMaybe<Scalars['String']>;
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  height?: InputMaybe<Scalars['Int']>;
  height_exists?: InputMaybe<Scalars['Boolean']>;
  height_gt?: InputMaybe<Scalars['Int']>;
  height_gte?: InputMaybe<Scalars['Int']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  height_lt?: InputMaybe<Scalars['Int']>;
  height_lte?: InputMaybe<Scalars['Int']>;
  height_not?: InputMaybe<Scalars['Int']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size?: InputMaybe<Scalars['Int']>;
  size_exists?: InputMaybe<Scalars['Boolean']>;
  size_gt?: InputMaybe<Scalars['Int']>;
  size_gte?: InputMaybe<Scalars['Int']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size_lt?: InputMaybe<Scalars['Int']>;
  size_lte?: InputMaybe<Scalars['Int']>;
  size_not?: InputMaybe<Scalars['Int']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  width?: InputMaybe<Scalars['Int']>;
  width_exists?: InputMaybe<Scalars['Boolean']>;
  width_gt?: InputMaybe<Scalars['Int']>;
  width_gte?: InputMaybe<Scalars['Int']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  width_lt?: InputMaybe<Scalars['Int']>;
  width_lte?: InputMaybe<Scalars['Int']>;
  width_not?: InputMaybe<Scalars['Int']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/clgjazsezfiu/content_types/banner) */
export type Banner = Entry & {
  __typename?: 'Banner';
  componentName?: Maybe<Scalars['String']>;
  componentType?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  height?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<BannerLinkingCollections>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/clgjazsezfiu/content_types/banner) */
export type BannerComponentNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/clgjazsezfiu/content_types/banner) */
export type BannerComponentTypeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/clgjazsezfiu/content_types/banner) */
export type BannerHeightArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/clgjazsezfiu/content_types/banner) */
export type BannerLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type BannerCollection = {
  __typename?: 'BannerCollection';
  items: Array<Maybe<Banner>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type BannerFilter = {
  AND?: InputMaybe<Array<InputMaybe<BannerFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<BannerFilter>>>;
  componentName?: InputMaybe<Scalars['String']>;
  componentName_contains?: InputMaybe<Scalars['String']>;
  componentName_exists?: InputMaybe<Scalars['Boolean']>;
  componentName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  componentName_not?: InputMaybe<Scalars['String']>;
  componentName_not_contains?: InputMaybe<Scalars['String']>;
  componentName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  componentType?: InputMaybe<Scalars['String']>;
  componentType_contains?: InputMaybe<Scalars['String']>;
  componentType_exists?: InputMaybe<Scalars['Boolean']>;
  componentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  componentType_not?: InputMaybe<Scalars['String']>;
  componentType_not_contains?: InputMaybe<Scalars['String']>;
  componentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  height?: InputMaybe<Scalars['String']>;
  height_contains?: InputMaybe<Scalars['String']>;
  height_exists?: InputMaybe<Scalars['Boolean']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  height_not?: InputMaybe<Scalars['String']>;
  height_not_contains?: InputMaybe<Scalars['String']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type BannerLinkingCollections = {
  __typename?: 'BannerLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type BannerLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type BannerLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum BannerOrder {
  ComponentNameAsc = 'componentName_ASC',
  ComponentNameDesc = 'componentName_DESC',
  ComponentTypeAsc = 'componentType_ASC',
  ComponentTypeDesc = 'componentType_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/clgjazsezfiu/content_types/color) */
export type Color = Entry & {
  __typename?: 'Color';
  colorCode?: Maybe<Scalars['String']>;
  componentName?: Maybe<Scalars['String']>;
  componentType?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  darkModeColor?: Maybe<Scalars['String']>;
  lightModeColor?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<ColorLinkingCollections>;
  paletteRole?: Maybe<PaletteRole>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/clgjazsezfiu/content_types/color) */
export type ColorColorCodeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/clgjazsezfiu/content_types/color) */
export type ColorComponentNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/clgjazsezfiu/content_types/color) */
export type ColorComponentTypeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/clgjazsezfiu/content_types/color) */
export type ColorDarkModeColorArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/clgjazsezfiu/content_types/color) */
export type ColorLightModeColorArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/clgjazsezfiu/content_types/color) */
export type ColorLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/clgjazsezfiu/content_types/color) */
export type ColorPaletteRoleArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type ColorCollection = {
  __typename?: 'ColorCollection';
  items: Array<Maybe<Color>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ColorFilter = {
  AND?: InputMaybe<Array<InputMaybe<ColorFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ColorFilter>>>;
  colorCode?: InputMaybe<Scalars['String']>;
  colorCode_contains?: InputMaybe<Scalars['String']>;
  colorCode_exists?: InputMaybe<Scalars['Boolean']>;
  colorCode_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  colorCode_not?: InputMaybe<Scalars['String']>;
  colorCode_not_contains?: InputMaybe<Scalars['String']>;
  colorCode_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  componentName?: InputMaybe<Scalars['String']>;
  componentName_contains?: InputMaybe<Scalars['String']>;
  componentName_exists?: InputMaybe<Scalars['Boolean']>;
  componentName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  componentName_not?: InputMaybe<Scalars['String']>;
  componentName_not_contains?: InputMaybe<Scalars['String']>;
  componentName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  componentType?: InputMaybe<Scalars['String']>;
  componentType_contains?: InputMaybe<Scalars['String']>;
  componentType_exists?: InputMaybe<Scalars['Boolean']>;
  componentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  componentType_not?: InputMaybe<Scalars['String']>;
  componentType_not_contains?: InputMaybe<Scalars['String']>;
  componentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  darkModeColor?: InputMaybe<Scalars['String']>;
  darkModeColor_contains?: InputMaybe<Scalars['String']>;
  darkModeColor_exists?: InputMaybe<Scalars['Boolean']>;
  darkModeColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  darkModeColor_not?: InputMaybe<Scalars['String']>;
  darkModeColor_not_contains?: InputMaybe<Scalars['String']>;
  darkModeColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lightModeColor?: InputMaybe<Scalars['String']>;
  lightModeColor_contains?: InputMaybe<Scalars['String']>;
  lightModeColor_exists?: InputMaybe<Scalars['Boolean']>;
  lightModeColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lightModeColor_not?: InputMaybe<Scalars['String']>;
  lightModeColor_not_contains?: InputMaybe<Scalars['String']>;
  lightModeColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  paletteRole?: InputMaybe<CfPaletteRoleNestedFilter>;
  paletteRole_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type ColorLinkingCollections = {
  __typename?: 'ColorLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  paletteCollection?: Maybe<PaletteCollection>;
};


export type ColorLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ColorLinkingCollectionsPaletteCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ColorOrder {
  ColorCodeAsc = 'colorCode_ASC',
  ColorCodeDesc = 'colorCode_DESC',
  ComponentNameAsc = 'componentName_ASC',
  ComponentNameDesc = 'componentName_DESC',
  ComponentTypeAsc = 'componentType_ASC',
  ComponentTypeDesc = 'componentType_DESC',
  DarkModeColorAsc = 'darkModeColor_ASC',
  DarkModeColorDesc = 'darkModeColor_DESC',
  LightModeColorAsc = 'lightModeColor_ASC',
  LightModeColorDesc = 'lightModeColor_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']>;
};

/** [See type definition](https://app.contentful.com/spaces/clgjazsezfiu/content_types/navigationMenu) */
export type NavigationMenu = Entry & {
  __typename?: 'NavigationMenu';
  componentName?: Maybe<Scalars['String']>;
  componentType?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<NavigationMenuLinkingCollections>;
  navigationMenuItemsCollection?: Maybe<NavigationMenuNavigationMenuItemsCollection>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/clgjazsezfiu/content_types/navigationMenu) */
export type NavigationMenuComponentNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/clgjazsezfiu/content_types/navigationMenu) */
export type NavigationMenuComponentTypeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/clgjazsezfiu/content_types/navigationMenu) */
export type NavigationMenuLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/clgjazsezfiu/content_types/navigationMenu) */
export type NavigationMenuNavigationMenuItemsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type NavigationMenuCollection = {
  __typename?: 'NavigationMenuCollection';
  items: Array<Maybe<NavigationMenu>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type NavigationMenuFilter = {
  AND?: InputMaybe<Array<InputMaybe<NavigationMenuFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<NavigationMenuFilter>>>;
  componentName?: InputMaybe<Scalars['String']>;
  componentName_contains?: InputMaybe<Scalars['String']>;
  componentName_exists?: InputMaybe<Scalars['Boolean']>;
  componentName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  componentName_not?: InputMaybe<Scalars['String']>;
  componentName_not_contains?: InputMaybe<Scalars['String']>;
  componentName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  componentType?: InputMaybe<Scalars['String']>;
  componentType_contains?: InputMaybe<Scalars['String']>;
  componentType_exists?: InputMaybe<Scalars['Boolean']>;
  componentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  componentType_not?: InputMaybe<Scalars['String']>;
  componentType_not_contains?: InputMaybe<Scalars['String']>;
  componentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  navigationMenuItemsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/clgjazsezfiu/content_types/navigationMenuItem) */
export type NavigationMenuItem = Entry & {
  __typename?: 'NavigationMenuItem';
  componentName?: Maybe<Scalars['String']>;
  componentType?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  label?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<NavigationMenuItemLinkingCollections>;
  navigationMenuItemsCollection?: Maybe<NavigationMenuItemNavigationMenuItemsCollection>;
  sys: Sys;
  url?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/clgjazsezfiu/content_types/navigationMenuItem) */
export type NavigationMenuItemComponentNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/clgjazsezfiu/content_types/navigationMenuItem) */
export type NavigationMenuItemComponentTypeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/clgjazsezfiu/content_types/navigationMenuItem) */
export type NavigationMenuItemLabelArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/clgjazsezfiu/content_types/navigationMenuItem) */
export type NavigationMenuItemLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/clgjazsezfiu/content_types/navigationMenuItem) */
export type NavigationMenuItemNavigationMenuItemsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** [See type definition](https://app.contentful.com/spaces/clgjazsezfiu/content_types/navigationMenuItem) */
export type NavigationMenuItemUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type NavigationMenuItemCollection = {
  __typename?: 'NavigationMenuItemCollection';
  items: Array<Maybe<NavigationMenuItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type NavigationMenuItemFilter = {
  AND?: InputMaybe<Array<InputMaybe<NavigationMenuItemFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<NavigationMenuItemFilter>>>;
  componentName?: InputMaybe<Scalars['String']>;
  componentName_contains?: InputMaybe<Scalars['String']>;
  componentName_exists?: InputMaybe<Scalars['Boolean']>;
  componentName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  componentName_not?: InputMaybe<Scalars['String']>;
  componentName_not_contains?: InputMaybe<Scalars['String']>;
  componentName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  componentType?: InputMaybe<Scalars['String']>;
  componentType_contains?: InputMaybe<Scalars['String']>;
  componentType_exists?: InputMaybe<Scalars['Boolean']>;
  componentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  componentType_not?: InputMaybe<Scalars['String']>;
  componentType_not_contains?: InputMaybe<Scalars['String']>;
  componentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  label?: InputMaybe<Scalars['String']>;
  label_contains?: InputMaybe<Scalars['String']>;
  label_exists?: InputMaybe<Scalars['Boolean']>;
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  label_not?: InputMaybe<Scalars['String']>;
  label_not_contains?: InputMaybe<Scalars['String']>;
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  navigationMenuItemsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NavigationMenuItemLinkingCollections = {
  __typename?: 'NavigationMenuItemLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  navigationMenuCollection?: Maybe<NavigationMenuCollection>;
  navigationMenuItemCollection?: Maybe<NavigationMenuItemCollection>;
};


export type NavigationMenuItemLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type NavigationMenuItemLinkingCollectionsNavigationMenuCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type NavigationMenuItemLinkingCollectionsNavigationMenuItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type NavigationMenuItemNavigationMenuItemsCollection = {
  __typename?: 'NavigationMenuItemNavigationMenuItemsCollection';
  items: Array<Maybe<NavigationMenuItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum NavigationMenuItemOrder {
  ComponentNameAsc = 'componentName_ASC',
  ComponentNameDesc = 'componentName_DESC',
  ComponentTypeAsc = 'componentType_ASC',
  ComponentTypeDesc = 'componentType_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

export type NavigationMenuLinkingCollections = {
  __typename?: 'NavigationMenuLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type NavigationMenuLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type NavigationMenuLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type NavigationMenuNavigationMenuItemsCollection = {
  __typename?: 'NavigationMenuNavigationMenuItemsCollection';
  items: Array<Maybe<NavigationMenuItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum NavigationMenuOrder {
  ComponentNameAsc = 'componentName_ASC',
  ComponentNameDesc = 'componentName_DESC',
  ComponentTypeAsc = 'componentType_ASC',
  ComponentTypeDesc = 'componentType_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/clgjazsezfiu/content_types/page) */
export type Page = Entry & {
  __typename?: 'Page';
  contentCollection?: Maybe<PageContentCollection>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<PageLinkingCollections>;
  pageTemplateComponent?: Maybe<PageTemplate>;
  slug?: Maybe<Scalars['String']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/clgjazsezfiu/content_types/page) */
export type PageContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** [See type definition](https://app.contentful.com/spaces/clgjazsezfiu/content_types/page) */
export type PageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/clgjazsezfiu/content_types/page) */
export type PagePageTemplateComponentArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/clgjazsezfiu/content_types/page) */
export type PageSlugArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/clgjazsezfiu/content_types/page) */
export type PageTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type PageCollection = {
  __typename?: 'PageCollection';
  items: Array<Maybe<Page>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PageContentCollection = {
  __typename?: 'PageContentCollection';
  items: Array<Maybe<PageContentItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PageContentItem = Banner | NavigationMenu | PageTemplate;

export type PageFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageFilter>>>;
  contentCollection_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  pageTemplateComponent?: InputMaybe<CfPageTemplateNestedFilter>;
  pageTemplateComponent_exists?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PageLinkingCollections = {
  __typename?: 'PageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type PageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum PageOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/clgjazsezfiu/content_types/pageTemplate) */
export type PageTemplate = Entry & {
  __typename?: 'PageTemplate';
  componentName?: Maybe<Scalars['String']>;
  componentType?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<PageTemplateLinkingCollections>;
  palette?: Maybe<Palette>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/clgjazsezfiu/content_types/pageTemplate) */
export type PageTemplateComponentNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/clgjazsezfiu/content_types/pageTemplate) */
export type PageTemplateComponentTypeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/clgjazsezfiu/content_types/pageTemplate) */
export type PageTemplateLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/clgjazsezfiu/content_types/pageTemplate) */
export type PageTemplatePaletteArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type PageTemplateCollection = {
  __typename?: 'PageTemplateCollection';
  items: Array<Maybe<PageTemplate>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PageTemplateFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageTemplateFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageTemplateFilter>>>;
  componentName?: InputMaybe<Scalars['String']>;
  componentName_contains?: InputMaybe<Scalars['String']>;
  componentName_exists?: InputMaybe<Scalars['Boolean']>;
  componentName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  componentName_not?: InputMaybe<Scalars['String']>;
  componentName_not_contains?: InputMaybe<Scalars['String']>;
  componentName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  componentType?: InputMaybe<Scalars['String']>;
  componentType_contains?: InputMaybe<Scalars['String']>;
  componentType_exists?: InputMaybe<Scalars['Boolean']>;
  componentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  componentType_not?: InputMaybe<Scalars['String']>;
  componentType_not_contains?: InputMaybe<Scalars['String']>;
  componentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  palette?: InputMaybe<CfPaletteNestedFilter>;
  palette_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type PageTemplateLinkingCollections = {
  __typename?: 'PageTemplateLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type PageTemplateLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PageTemplateLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum PageTemplateOrder {
  ComponentNameAsc = 'componentName_ASC',
  ComponentNameDesc = 'componentName_DESC',
  ComponentTypeAsc = 'componentType_ASC',
  ComponentTypeDesc = 'componentType_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/clgjazsezfiu/content_types/palette) */
export type Palette = Entry & {
  __typename?: 'Palette';
  colorsCollection?: Maybe<PaletteColorsCollection>;
  componentName?: Maybe<Scalars['String']>;
  componentType?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<PaletteLinkingCollections>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/clgjazsezfiu/content_types/palette) */
export type PaletteColorsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** [See type definition](https://app.contentful.com/spaces/clgjazsezfiu/content_types/palette) */
export type PaletteComponentNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/clgjazsezfiu/content_types/palette) */
export type PaletteComponentTypeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/clgjazsezfiu/content_types/palette) */
export type PaletteLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PaletteCollection = {
  __typename?: 'PaletteCollection';
  items: Array<Maybe<Palette>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PaletteColorsCollection = {
  __typename?: 'PaletteColorsCollection';
  items: Array<Maybe<Color>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PaletteFilter = {
  AND?: InputMaybe<Array<InputMaybe<PaletteFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PaletteFilter>>>;
  colorsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  componentName?: InputMaybe<Scalars['String']>;
  componentName_contains?: InputMaybe<Scalars['String']>;
  componentName_exists?: InputMaybe<Scalars['Boolean']>;
  componentName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  componentName_not?: InputMaybe<Scalars['String']>;
  componentName_not_contains?: InputMaybe<Scalars['String']>;
  componentName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  componentType?: InputMaybe<Scalars['String']>;
  componentType_contains?: InputMaybe<Scalars['String']>;
  componentType_exists?: InputMaybe<Scalars['Boolean']>;
  componentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  componentType_not?: InputMaybe<Scalars['String']>;
  componentType_not_contains?: InputMaybe<Scalars['String']>;
  componentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export type PaletteLinkingCollections = {
  __typename?: 'PaletteLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageTemplateCollection?: Maybe<PageTemplateCollection>;
};


export type PaletteLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PaletteLinkingCollectionsPageTemplateCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum PaletteOrder {
  ComponentNameAsc = 'componentName_ASC',
  ComponentNameDesc = 'componentName_DESC',
  ComponentTypeAsc = 'componentType_ASC',
  ComponentTypeDesc = 'componentType_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/clgjazsezfiu/content_types/paletteRole) */
export type PaletteRole = Entry & {
  __typename?: 'PaletteRole';
  code?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<PaletteRoleLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/clgjazsezfiu/content_types/paletteRole) */
export type PaletteRoleCodeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/clgjazsezfiu/content_types/paletteRole) */
export type PaletteRoleLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/clgjazsezfiu/content_types/paletteRole) */
export type PaletteRoleNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type PaletteRoleCollection = {
  __typename?: 'PaletteRoleCollection';
  items: Array<Maybe<PaletteRole>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PaletteRoleFilter = {
  AND?: InputMaybe<Array<InputMaybe<PaletteRoleFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PaletteRoleFilter>>>;
  code?: InputMaybe<Scalars['String']>;
  code_contains?: InputMaybe<Scalars['String']>;
  code_exists?: InputMaybe<Scalars['Boolean']>;
  code_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  code_not?: InputMaybe<Scalars['String']>;
  code_not_contains?: InputMaybe<Scalars['String']>;
  code_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type PaletteRoleLinkingCollections = {
  __typename?: 'PaletteRoleLinkingCollections';
  colorCollection?: Maybe<ColorCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type PaletteRoleLinkingCollectionsColorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PaletteRoleLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum PaletteRoleOrder {
  CodeAsc = 'code_ASC',
  CodeDesc = 'code_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type Query = {
  __typename?: 'Query';
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  banner?: Maybe<Banner>;
  bannerCollection?: Maybe<BannerCollection>;
  color?: Maybe<Color>;
  colorCollection?: Maybe<ColorCollection>;
  entryCollection?: Maybe<EntryCollection>;
  navigationMenu?: Maybe<NavigationMenu>;
  navigationMenuCollection?: Maybe<NavigationMenuCollection>;
  navigationMenuItem?: Maybe<NavigationMenuItem>;
  navigationMenuItemCollection?: Maybe<NavigationMenuItemCollection>;
  page?: Maybe<Page>;
  pageCollection?: Maybe<PageCollection>;
  pageTemplate?: Maybe<PageTemplate>;
  pageTemplateCollection?: Maybe<PageTemplateCollection>;
  palette?: Maybe<Palette>;
  paletteCollection?: Maybe<PaletteCollection>;
  paletteRole?: Maybe<PaletteRole>;
  paletteRoleCollection?: Maybe<PaletteRoleCollection>;
};


export type QueryAssetArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryBannerArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<BannerOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BannerFilter>;
};


export type QueryColorArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryColorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ColorOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ColorFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryNavigationMenuArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryNavigationMenuCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<NavigationMenuOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NavigationMenuFilter>;
};


export type QueryNavigationMenuItemArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryNavigationMenuItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<NavigationMenuItemOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NavigationMenuItemFilter>;
};


export type QueryPageArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageFilter>;
};


export type QueryPageTemplateArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPageTemplateCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageTemplateOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageTemplateFilter>;
};


export type QueryPaletteArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPaletteCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PaletteOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PaletteFilter>;
};


export type QueryPaletteRoleArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPaletteRoleCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PaletteRoleOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PaletteRoleFilter>;
};

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String'];
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedVersion?: Maybe<Scalars['Int']>;
  spaceId: Scalars['String'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  id?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_exists?: InputMaybe<Scalars['Boolean']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_not?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type CfPageTemplateNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfPageTemplateNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfPageTemplateNestedFilter>>>;
  componentName?: InputMaybe<Scalars['String']>;
  componentName_contains?: InputMaybe<Scalars['String']>;
  componentName_exists?: InputMaybe<Scalars['Boolean']>;
  componentName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  componentName_not?: InputMaybe<Scalars['String']>;
  componentName_not_contains?: InputMaybe<Scalars['String']>;
  componentName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  componentType?: InputMaybe<Scalars['String']>;
  componentType_contains?: InputMaybe<Scalars['String']>;
  componentType_exists?: InputMaybe<Scalars['Boolean']>;
  componentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  componentType_not?: InputMaybe<Scalars['String']>;
  componentType_not_contains?: InputMaybe<Scalars['String']>;
  componentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  palette_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type CfPaletteNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfPaletteNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfPaletteNestedFilter>>>;
  colorsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  componentName?: InputMaybe<Scalars['String']>;
  componentName_contains?: InputMaybe<Scalars['String']>;
  componentName_exists?: InputMaybe<Scalars['Boolean']>;
  componentName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  componentName_not?: InputMaybe<Scalars['String']>;
  componentName_not_contains?: InputMaybe<Scalars['String']>;
  componentName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  componentType?: InputMaybe<Scalars['String']>;
  componentType_contains?: InputMaybe<Scalars['String']>;
  componentType_exists?: InputMaybe<Scalars['Boolean']>;
  componentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  componentType_not?: InputMaybe<Scalars['String']>;
  componentType_not_contains?: InputMaybe<Scalars['String']>;
  componentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export type CfPaletteRoleNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfPaletteRoleNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfPaletteRoleNestedFilter>>>;
  code?: InputMaybe<Scalars['String']>;
  code_contains?: InputMaybe<Scalars['String']>;
  code_exists?: InputMaybe<Scalars['Boolean']>;
  code_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  code_not?: InputMaybe<Scalars['String']>;
  code_not_contains?: InputMaybe<Scalars['String']>;
  code_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type BannerQueryVariables = Exact<{
  componentName: Scalars['String'];
}>;


export type BannerQuery = { __typename?: 'Query', bannerCollection?: { __typename?: 'BannerCollection', items: Array<{ __typename?: 'Banner', height?: string | null } | null> } | null };

export type ColorQueryVariables = Exact<{
  componentName: Scalars['String'];
}>;


export type ColorQuery = { __typename?: 'Query', colorCollection?: { __typename?: 'ColorCollection', items: Array<{ __typename?: 'Color', lightModeColor?: string | null, darkModeColor?: string | null, paletteRole?: { __typename?: 'PaletteRole', name?: string | null, code?: string | null } | null } | null> } | null };

export type NavigationMenuQueryVariables = Exact<{
  componentName: Scalars['String'];
}>;


export type NavigationMenuQuery = { __typename?: 'Query', navigationMenuCollection?: { __typename?: 'NavigationMenuCollection', items: Array<{ __typename?: 'NavigationMenu', componentName?: string | null, componentType?: string | null, navigationMenuItemsCollection?: { __typename?: 'NavigationMenuNavigationMenuItemsCollection', items: Array<{ __typename?: 'NavigationMenuItem', componentName?: string | null, componentType?: string | null } | null> } | null } | null> } | null };

export type NavigationMenuItemQueryVariables = Exact<{
  componentName: Scalars['String'];
}>;


export type NavigationMenuItemQuery = { __typename?: 'Query', navigationMenuItemCollection?: { __typename?: 'NavigationMenuItemCollection', items: Array<{ __typename?: 'NavigationMenuItem', label?: string | null, url?: string | null, navigationMenuItemsCollection?: { __typename?: 'NavigationMenuItemNavigationMenuItemsCollection', items: Array<{ __typename?: 'NavigationMenuItem', componentName?: string | null, componentType?: string | null } | null> } | null } | null> } | null };

export type PageFragment = { __typename?: 'Page', title?: string | null, slug?: string | null, pageTemplateComponent?: { __typename?: 'PageTemplate', componentName?: string | null, componentType?: string | null } | null, contentCollection?: { __typename?: 'PageContentCollection', items: Array<{ __typename: 'Banner', componentName?: string | null, componentType?: string | null } | { __typename: 'NavigationMenu', componentName?: string | null, componentType?: string | null } | { __typename: 'PageTemplate', componentName?: string | null, componentType?: string | null } | null> } | null };

export type PagesQueryVariables = Exact<{ [key: string]: never; }>;


export type PagesQuery = { __typename?: 'Query', pageCollection?: { __typename?: 'PageCollection', items: Array<{ __typename?: 'Page', title?: string | null, slug?: string | null, pageTemplateComponent?: { __typename?: 'PageTemplate', componentName?: string | null, componentType?: string | null } | null, contentCollection?: { __typename?: 'PageContentCollection', items: Array<{ __typename: 'Banner', componentName?: string | null, componentType?: string | null } | { __typename: 'NavigationMenu', componentName?: string | null, componentType?: string | null } | { __typename: 'PageTemplate', componentName?: string | null, componentType?: string | null } | null> } | null } | null> } | null };

export type PageItemQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type PageItemQuery = { __typename?: 'Query', pageCollection?: { __typename?: 'PageCollection', items: Array<{ __typename?: 'Page', title?: string | null, slug?: string | null, pageTemplateComponent?: { __typename?: 'PageTemplate', componentName?: string | null, componentType?: string | null } | null, contentCollection?: { __typename?: 'PageContentCollection', items: Array<{ __typename: 'Banner', componentName?: string | null, componentType?: string | null } | { __typename: 'NavigationMenu', componentName?: string | null, componentType?: string | null } | { __typename: 'PageTemplate', componentName?: string | null, componentType?: string | null } | null> } | null } | null> } | null };

export type PageTemplateQueryVariables = Exact<{
  componentName: Scalars['String'];
}>;


export type PageTemplateQuery = { __typename?: 'Query', pageTemplateCollection?: { __typename?: 'PageTemplateCollection', items: Array<{ __typename?: 'PageTemplate', palette?: { __typename?: 'Palette', componentName?: string | null, componentType?: string | null } | null } | null> } | null };

export type PaletteQueryVariables = Exact<{
  componentName: Scalars['String'];
}>;


export type PaletteQuery = { __typename?: 'Query', paletteCollection?: { __typename?: 'PaletteCollection', items: Array<{ __typename?: 'Palette', colorsCollection?: { __typename?: 'PaletteColorsCollection', items: Array<{ __typename?: 'Color', componentName?: string | null, componentType?: string | null } | null> } | null } | null> } | null };

export const Page = gql`
    fragment page on Page {
  title
  slug
  pageTemplateComponent {
    componentName
    componentType
  }
  contentCollection {
    items {
      __typename
      ... on Banner {
        componentName
        componentType
      }
      ... on NavigationMenu {
        componentName
        componentType
      }
      ... on PageTemplate {
        componentName
        componentType
      }
    }
  }
}
    `;
export const Banner = gql`
    query Banner($componentName: String!) {
  bannerCollection(
    where: {AND: [{componentName: $componentName}, {componentType: "Banner"}]}
  ) {
    items {
      height
    }
  }
}
    `;
export const Color = gql`
    query Color($componentName: String!) {
  colorCollection(
    where: {AND: [{componentName: $componentName}, {componentType: "Color"}]}
  ) {
    items {
      paletteRole {
        name
        code
      }
      lightModeColor
      darkModeColor
    }
  }
}
    `;
export const NavigationMenu = gql`
    query NavigationMenu($componentName: String!) {
  navigationMenuCollection(
    where: {AND: [{componentName: $componentName}, {componentType: "NavigationMenu"}]}
  ) {
    items {
      componentName
      componentType
      navigationMenuItemsCollection {
        items {
          componentName
          componentType
        }
      }
    }
  }
}
    `;
export const NavigationMenuItem = gql`
    query NavigationMenuItem($componentName: String!) {
  navigationMenuItemCollection(
    where: {AND: [{componentName: $componentName}, {componentType: "NavigationMenuItem"}]}
  ) {
    items {
      label
      url
      navigationMenuItemsCollection {
        items {
          componentName
          componentType
        }
      }
    }
  }
}
    `;
export const Pages = gql`
    query Pages {
  pageCollection {
    items {
      ...page
    }
  }
}
    ${Page}`;
export const PageItem = gql`
    query PageItem($slug: String!) {
  pageCollection(where: {slug: $slug}) {
    items {
      ...page
    }
  }
}
    ${Page}`;
export const PageTemplate = gql`
    query PageTemplate($componentName: String!) {
  pageTemplateCollection(
    where: {AND: [{componentName: $componentName}, {componentType: "PageTemplate"}]}
  ) {
    items {
      palette {
        componentName
        componentType
      }
    }
  }
}
    `;
export const Palette = gql`
    query Palette($componentName: String!) {
  paletteCollection(
    where: {AND: [{componentName: $componentName}, {componentType: "Palette"}]}
  ) {
    items {
      colorsCollection {
        items {
          componentName
          componentType
        }
      }
    }
  }
}
    `;
export const PageFragmentDoc = gql`
    fragment page on Page {
  title
  slug
  pageTemplateComponent {
    componentName
    componentType
  }
  contentCollection {
    items {
      __typename
      ... on Banner {
        componentName
        componentType
      }
      ... on NavigationMenu {
        componentName
        componentType
      }
      ... on PageTemplate {
        componentName
        componentType
      }
    }
  }
}
    `;
export const BannerDocument = gql`
    query Banner($componentName: String!) {
  bannerCollection(
    where: {AND: [{componentName: $componentName}, {componentType: "Banner"}]}
  ) {
    items {
      height
    }
  }
}
    `;
export const ColorDocument = gql`
    query Color($componentName: String!) {
  colorCollection(
    where: {AND: [{componentName: $componentName}, {componentType: "Color"}]}
  ) {
    items {
      paletteRole {
        name
        code
      }
      lightModeColor
      darkModeColor
    }
  }
}
    `;
export const NavigationMenuDocument = gql`
    query NavigationMenu($componentName: String!) {
  navigationMenuCollection(
    where: {AND: [{componentName: $componentName}, {componentType: "NavigationMenu"}]}
  ) {
    items {
      componentName
      componentType
      navigationMenuItemsCollection {
        items {
          componentName
          componentType
        }
      }
    }
  }
}
    `;
export const NavigationMenuItemDocument = gql`
    query NavigationMenuItem($componentName: String!) {
  navigationMenuItemCollection(
    where: {AND: [{componentName: $componentName}, {componentType: "NavigationMenuItem"}]}
  ) {
    items {
      label
      url
      navigationMenuItemsCollection {
        items {
          componentName
          componentType
        }
      }
    }
  }
}
    `;
export const PagesDocument = gql`
    query Pages {
  pageCollection {
    items {
      ...page
    }
  }
}
    ${PageFragmentDoc}`;
export const PageItemDocument = gql`
    query PageItem($slug: String!) {
  pageCollection(where: {slug: $slug}) {
    items {
      ...page
    }
  }
}
    ${PageFragmentDoc}`;
export const PageTemplateDocument = gql`
    query PageTemplate($componentName: String!) {
  pageTemplateCollection(
    where: {AND: [{componentName: $componentName}, {componentType: "PageTemplate"}]}
  ) {
    items {
      palette {
        componentName
        componentType
      }
    }
  }
}
    `;
export const PaletteDocument = gql`
    query Palette($componentName: String!) {
  paletteCollection(
    where: {AND: [{componentName: $componentName}, {componentType: "Palette"}]}
  ) {
    items {
      colorsCollection {
        items {
          componentName
          componentType
        }
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    Banner(variables: BannerQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<BannerQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<BannerQuery>(BannerDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Banner', 'query');
    },
    Color(variables: ColorQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ColorQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ColorQuery>(ColorDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Color', 'query');
    },
    NavigationMenu(variables: NavigationMenuQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<NavigationMenuQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<NavigationMenuQuery>(NavigationMenuDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'NavigationMenu', 'query');
    },
    NavigationMenuItem(variables: NavigationMenuItemQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<NavigationMenuItemQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<NavigationMenuItemQuery>(NavigationMenuItemDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'NavigationMenuItem', 'query');
    },
    Pages(variables?: PagesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PagesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PagesQuery>(PagesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Pages', 'query');
    },
    PageItem(variables: PageItemQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PageItemQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PageItemQuery>(PageItemDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'PageItem', 'query');
    },
    PageTemplate(variables: PageTemplateQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PageTemplateQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PageTemplateQuery>(PageTemplateDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'PageTemplate', 'query');
    },
    Palette(variables: PaletteQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PaletteQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PaletteQuery>(PaletteDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Palette', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;