export default { async fetch(request) { const url=new URL(request.url); return url.pathname==='/api/health' ? Response.json({ok:true}) : new Response('Not found',{status:404}); } };
