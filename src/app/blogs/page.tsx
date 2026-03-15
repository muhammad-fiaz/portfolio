import { redirectToCanonicalRoute } from "@/lib/route-redirect";

export default function BlogsRedirectPage() {
  return redirectToCanonicalRoute("/blog");
}
