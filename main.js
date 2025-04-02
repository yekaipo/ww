Deno.serve(async (req) => {
      let url= req.headers.get("url");
        req.headers.delete("url");
          const response = await fetch(url, req);
            const headers = new Headers(response.headers);
              headers.set("Access-Control-Allow-Origin", "*");
                return new Response(headers);
                });
})
