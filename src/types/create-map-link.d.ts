// create-map-link@1.0.3 ships valid types but its package.json "exports"
// map omits a "types" condition, so TS can't resolve them under
// moduleResolution: "bundler". This re-declares the small API we use.
declare module "create-map-link" {
  export type MapCoordinates = { latitude: number; longitude: number };
  export type MapProvider = "auto" | "apple" | "google";

  export type MapLinkOptions = {
    provider?: MapProvider;
    query?: string | MapCoordinates;
    destination?: string | MapCoordinates;
    origin?: string | MapCoordinates;
    travelMode?: "driving" | "walking" | "cycling" | "transit";
    center?: MapCoordinates;
    zoom?: number;
    mapType?: "standard" | "satellite" | "transit";
  };

  export function createMapLink(
    type: "search" | "directions" | "display",
    options: MapLinkOptions,
  ): string;
}
