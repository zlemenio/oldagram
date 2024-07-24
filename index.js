const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
        isLiked: false
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        isLiked: false
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        isLiked: false
    }
]

const body = document.querySelector("body")



document.addEventListener("click", function(e){
    if (e.target.dataset.like) {
        increaseTheLike(e.target.dataset.like)
        render()
    }

})

document.addEventListener("dblclick", function(e){
    if (e.target.dataset.dblike) {
        increaseTheLike(e.target.dataset.dblike)
        render()
    }
})


function increaseTheLike(id, num = 1) {
    posts.forEach(function(current){
        if(current.username === id) 
            {
                if (current.isLiked == false) {
                    current.likes += num
                }
                else if (current.isLiked == true) {
                    current.likes -= num
                }
                current.isLiked = !current.isLiked
        }
    })
    posts.forEach(function(current){
        if(current.username === id) {
            console.log(`reloop dbcheck ${current.likes}`)
        }
    }) 
}


function render() {
    let getFeed = ``
    for (let i = 0; i < posts.length; i++) {
        let defaultIcon = `icon-heart.png`
        if (posts[i].isLiked === true) {
            defaultIcon = `love.png`
        }
        else {
            defaultIcon = `icon-heart.png`
        }
        let randomUser = `
        <content class="post">
            <section class="randomUser">
                <img id="randomUserImg" src="${posts[i]['avatar']}">
                <div class="randomUserInfo">
                    <p>${posts[i]['name']}</p>
                    <p class="bold">${posts[i]['location']}</p>
                </div>
            </section>
            
            <img class="randomUserPost" data-dblike=${posts[i]['username']} id="dbHeartOf-${posts[i]['username']}" src="${posts[i]['post']}">           
            <section class="comment-place">
                <section class="emotes">
                    <img class="custom-emote" data-like="${posts[i]['username']}" id="heartOf-${posts[i]['username']}" src="/images/${defaultIcon}">
    
                    <img class="custom-emote begin" src="/images/icon-comment.png">                
                    <img class="custom-emote" src="/images/icon-dm.png">
                </section>
                <p class="bold bigger-fontsize"><span id="numberOf-${posts[i]['username']}">${posts[i]['likes']}</span> likes</p>
                <p><span class="bold bigger-fontsize">${posts[i]['username']}</span>${posts[i]['comment']}</p>
            </section>
            <p class="space-between"></p>
        </content>
        `    
        getFeed += randomUser
    }
    document.getElementById("here").innerHTML = getFeed
}



render()
