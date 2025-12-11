const backend_url = Deno.env.get("BACKEND_URL");

if (!backend_url) {
  throw new Error("BACKEND_URL environment variable is not set");
}

const BACKEND_URL = backend_url;

export { BACKEND_URL };
