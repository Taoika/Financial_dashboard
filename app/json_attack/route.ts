export async function POST(req: Request) {
    let body = '';
    try {
        body = await req.json();
    } catch(e) {
        console.log(e);
    }
    return Response.json({
        message: body,
    })
}