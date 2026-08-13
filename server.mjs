import { createServer } from "node:http";
import { createReadStream, existsSync, statSync } from "node:fs";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL(".", import.meta.url));
const requestedPort = Number(process.env.PORT || 5173);

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".png": "image/png",
  ".pdf": "application/pdf",
  ".svg": "image/svg+xml",
  ".ttf": "font/ttf"
};

function resolvePath(requestUrl, activePort) {
  const url = new URL(requestUrl, `http://localhost:${activePort}`);
  const cleanPath = normalize(decodeURIComponent(url.pathname)).replace(/^(\.\.[/\\])+/, "");
  const target = join(root, cleanPath === "/" ? "index.html" : cleanPath);

  if (!target.startsWith(root)) {
    return null;
  }

  if (existsSync(target) && statSync(target).isDirectory()) {
    return join(target, "index.html");
  }

  return target;
}

function start(port) {
  const server = createServer((request, response) => {
    const target = resolvePath(request.url || "/", port);

    if (!target || !existsSync(target)) {
      response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      response.end("404 Not Found");
      return;
    }

    response.writeHead(200, {
      "Content-Type": mimeTypes[extname(target)] || "application/octet-stream",
      "Cache-Control": "no-store"
    });
    createReadStream(target).pipe(response);
  });

  server.on("error", (error) => {
    if (error.code === "EADDRINUSE" && port < requestedPort + 20) {
      start(port + 1);
      return;
    }

    throw error;
  });

  server.listen(port, () => {
    console.log(`Portfolio running at http://localhost:${port}`);
  });
}

start(requestedPort);
