// var user1 = {
//     userName: '@elonmusk',
//     displayName: 'Elon Musk',
//     joinedDate: 'June 2009',
//     followingCount: 103,
//     followerCount: 47900000,
//     avatarURL: 'assets/elonmusk.jpg',
//     coverPhotoURL: 'assets/elonmusk-cover.jpeg',
//     tweets: [
//         {
//             text: 'I admit to judging books by their cover',
//             timestamp: '2/10/2021 00:01:20'
//         },
//         {
//             text: 'Starship to the moon',
//             timestamp: '2/09/2021 18:37:12'
//         },
//         {
//             text: 'Out on launch pad, engine swap underway',
//             timestamp: '2/09/2021 12:11:51'
//         }
//     ]
// };

// var user2 = {
//     userName: '@BillGates',
//     displayName: 'Bill Gates',
//     joinedDate: 'June 2009',
//     followingCount: 274,
//     followerCount: 53800000,
//     avatarURL: 'assets/billgates.jpg',
//     coverPhotoURL: 'assets/billgates-cover.jpeg',
//     tweets: [
//         {
//             text: 'Everybody asks, how is the next Windows coming along? But nobody asks how is Bill? :/',
//             timestamp: '2/10/2021 00:01:20'
//         },
//         {
//             text: 'Should I start tweeting memes? Let me know in a comment.',
//             timestamp: '2/09/2021 18:37:12'
//         },
//         {
//             text: 'In 2020, I read a book every hour.',
//             timestamp: '2/09/2021 12:11:51'
//         }
//     ]
// };

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
       const urlParams = new URLSearchParams(location.search);
       for (const [key, value] of urlParams) {
            $('#header-text').append($(`<h2>${users[value].displayName}<img src="https://www.citypng.com/public/uploads/small/51615335738jnjzusq5sh6pc2rpzpw2yb2szoi660r5w0yjyvfduvciogdi3omoyc5wqtdo9yrinz7i72892tgahvkovr0f2tqwez4ohhrgzakr.png" class="verified"></h2><p class="sm-grey-txt">${users[value].tweets.length} Tweets</p>`));
            $(`#photo-container`).css({'backgroundImage': `url(${users[value].coverPhotoURL})`, 'background-repeat': 'no-repeat','background-size': 'cover'});
            $(`#profile-details`).append($(`<div><h2>${users[value].displayName}<img src="https://www.citypng.com/public/uploads/small/51615335738jnjzusq5sh6pc2rpzpw2yb2szoi660r5w0yjyvfduvciogdi3omoyc5wqtdo9yrinz7i72892tgahvkovr0f2tqwez4ohhrgzakr.png" class="verified"></h2><p class="sm-grey-txt">${users[value].userName}</p><p class="sm-grey-txt"><img id="img-calendar" src="https://flyclipart.com/thumb2/calendar-png-icon-free-download-592849.png">Joined since ${users[value].joinedDate}</p><div class="follow"><p class="sm-grey-txt"><span class="bold-txt">${users[value].followingCount}</span> Following</p><p class="sm-grey-txt"><span class="bold-txt">${users[value].followerCount/1000000}M</span> Followers</p></div></div><div></div>`));
            $(`#profile-details div:nth-of-type(2)`).append($(`<button id="follow-btn">Follow</button>`));
            $(`#photo-container`).append($(`<img class="avatar main-avatar" src="${users[value].avatarURL}">`));
            users[value].tweets.forEach(function(tweet, i){
                // console.log(tweet);
                $(`#tweets`).append($(`<div class="tweets"><img class="avatar" src="${users[value].avatarURL}"><div class="tweet-text"><h4>${users[value].displayName}<img src="https://www.citypng.com/public/uploads/small/51615335738jnjzusq5sh6pc2rpzpw2yb2szoi660r5w0yjyvfduvciogdi3omoyc5wqtdo9yrinz7i72892tgahvkovr0f2tqwez4ohhrgzakr.png" class="verified small-img"><span class="sm-grey-txt">  ${users[value].userName} • ${tweet.timestamp}</span></h4></p><p>${tweet.text}</p></div></div>`));
            });
        }
    }
};
xhttp.open("GET", "./index.js", true);
xhttp.send();


