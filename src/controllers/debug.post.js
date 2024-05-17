export default async function debugPostControl(req, res){
    let body = req.body;
    console.log(body);
    res.status(200).end();
}