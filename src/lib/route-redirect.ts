import { redirect } from "next/navigation";

export function redirectToCanonicalRoute(targetPath: string): never {
  redirect(targetPath);
}
