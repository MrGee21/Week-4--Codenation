const myPosts = [
    {title: 'Post One', body: 'this is post one body'},
    {title: 'Post Two', body: 'this is post two body'},
];

function getPosts (){
    console.log(myPosts);
};
function createPost (post){
    myPosts.push(post);
};
getPosts();
createPost({title: 'Post Three', body: 'this is post three body'});
getPosts();

function getPosts() {
    setTimeout( () => {
        myPosts.forEach((post) =>{                             /* Callback is used in the function createPost(), 
                                                                so that we can make sure that the 
                                                                myPosts.push(post) is completed before 
                                                                running the getPosts function.*/
            
            console.log(post.title);
        })
        console.log(myPosts);
    }, 1000);
}function createPost(post) {
    setTimeout(() => {
        myPosts.push(post);
    }, 5000);

createPost({title: 'Post Three', body: 'this is post three body'});
getPosts();

}
