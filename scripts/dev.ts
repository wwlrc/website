import { stubUser, stubRallies, stubPosts } from "./spanner-stub-fixtures";

// Some client components (blog.tsx, calendar.tsx) re-fetch after mount to
// pick up live data, calling this server directly from the browser — a
// different origin/port to the Next app, so CORS headers are needed.
const corsHeaders = { "Access-Control-Allow-Origin": "*" };

const stub = Bun.serve({
  port: 0,
  fetch(req) {
    const path = new URL(req.url).pathname;

    if (path.startsWith("/api/me"))
      return Response.json({ user: stubUser }, { headers: corsHeaders });
    if (path.startsWith("/api/public/v1/rallies"))
      return Response.json({ rallies: stubRallies }, { headers: corsHeaders });
    if (path.startsWith("/api/public/v1/news"))
      return Response.json({ posts: stubPosts }, { headers: corsHeaders });

    return new Response("Not found", { status: 404, headers: corsHeaders });
  },
});

console.log(`Spanner API stub listening on http://localhost:${stub.port}`);

const next = Bun.spawn(["next", "dev"], {
  stdout: "inherit",
  stderr: "inherit",
  stdin: "inherit",
  env: { ...process.env, NEXT_PUBLIC_SPANNER_API_URL: `http://localhost:${stub.port}` },
});

function shutdown() {
  next.kill();
  stub.stop();
}
process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

process.exit(await next.exited);
