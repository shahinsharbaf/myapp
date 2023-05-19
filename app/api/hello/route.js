export async function GET(request) {
  return new Response("Unauthorized request(no bearer)", { status: 200 });
}
