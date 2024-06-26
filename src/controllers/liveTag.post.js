import statusFeed from "../live/StatusFeed.js";

export default async function liveTagPostControl(req, res){
    let body = req.body;

    body?.tags?.map( (tagInfo, index) => {
        return tagInfo;
    })

    console.log(body);

    statusFeed.broadcast(JSON.stringify({
        tags: body.tags
    }));
    res.status(200).end();
}