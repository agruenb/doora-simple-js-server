export default async function testGetControl(req, res){
    console.log("Test received");
    res.send("Correct");
    res.status(200).end();
}