function githubUserName (username) {
        fetch(`https://api.github.com/users/${username}/events/public`, {headers: {'Authorization': GITHUB_TOKEN}})
            .then(function (data) {
                    console.log(data)
                    return data.json()
            }).then(function (data) {
                console.log(data)
                console.log(data[0].created_at)//This returns a data and weird timestamp.
                let latestPush = data[0].created_at;
                let date = new Date(latestPush);
                console.log(date.toString());
        })
}
githubUserName("carrington-jones");



