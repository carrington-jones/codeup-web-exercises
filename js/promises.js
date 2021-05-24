function githubUserName(username) {
    fetch(`https://api.github.com/users/${username}/events/public`, {headers: {'Authorization': GITHUB_TOKEN}})
        .then(function (data) {
            console.log(data)
            return data.json()
        }).then(function (data) {
        console.log(data)
        let lastPush;
        for (let event of data) {
            if (event.type === "PushEvent") {
                lastPush = new Date(event.created_at);
                break;
            }
        } console.log(lastPush)
    })
}

githubUserName("carrington-jones");

const wait = timer => {
    return myPromise = new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, timer)
    })
}

wait(1000).then(() => console.log('You will see this after 1 second!'));
wait(3000).then(() => console.log("You will see this after 3 seconds!"));
wait(10000).then(() => console.log("You will see this after 10 seconds!"));
