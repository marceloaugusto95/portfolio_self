// Reuse the Open Graph image for Twitter/X cards. Route config must be declared
// with literals here (Next can't statically parse re-exported config fields).
import OpengraphImage from "./opengraph-image";

export const runtime = "nodejs";
export const alt = "Marcelo Augusto Fries — Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default OpengraphImage;
