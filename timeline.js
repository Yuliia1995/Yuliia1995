var users = {
    user1: { 
        userName: '@elonmusk',
        displayName: 'Elon Musk',
        joinedDate: 'June 2009',
        followingCount: 103,
        followerCount: 47900000,
        avatarURL: 'assets/elonmusk.jpg',
        coverPhotoURL: 'assets/elonmusk-cover.jpeg',
        tweets: [
            {
                text: 'I admit to judging books by their cover',
                timestamp: '2/10/2021 00:01:20'
            },
            {
                text: 'Starship to the moon',
                timestamp: '2/09/2021 18:37:12'
            },
            {
                text: 'Out on launch pad, engine swap underway',
                timestamp: '2/09/2021 12:11:51'
            }
        ]
    },
    user2: {
        userName: '@BillGates',
        displayName: 'Bill Gates',
        joinedDate: 'June 2009',
        followingCount: 274,
        followerCount: 53800000,
        avatarURL: 'assets/billgates.jpg',
        coverPhotoURL: 'assets/billgates-cover.jpeg',
        tweets: [
            {
                text: 'Everybody asks, how is the next Windows coming along? But nobody asks how is Bill? :/',
                timestamp: '2/10/2021 00:01:20'
            },
            {
                text: 'Should I start tweeting memes? Let me know in a comment.',
                timestamp: '2/09/2021 18:37:12'
            },
            {
                text: 'In 2020, I read a book every hour.',
                timestamp: '2/09/2021 12:11:51'
            }
        ]
    }
};

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       const currentDate = new Date();
       for (let user in users) {
        for (let tweet of users[user].tweets) {
            tweet.timestamp = new Date(tweet.timestamp); 
            $(`body`).append($(`<div class="tweets"><img class="avatar" src="${users[user].avatarURL}"><div class="tweet-text"><h4>${users[user].displayName}<img src="https://www.citypng.com/public/uploads/small/51615335738jnjzusq5sh6pc2rpzpw2yb2szoi660r5w0yjyvfduvciogdi3omoyc5wqtdo9yrinz7i72892tgahvkovr0f2tqwez4ohhrgzakr.png" class="verified small-img"><span class="sm-grey-txt">  ${users[user].userName} • ${tweet.timestamp}</span></h4></p><p>${tweet.text}</p></div></div>`));
        }
       }
    }
};

xhttp.open("GET", "./timeline.js", true);
xhttp.send();

