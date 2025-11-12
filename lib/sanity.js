import { createClient } from "@sanity/client";

export const sanity = createClient({
  projectId: "1c0f18hw",
  dataset: "production",
  apiVersion: "2025-11-01", // today's date
  useCdn: true,
});
