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

function createPost(post){ 
    return new Promise((resolve,reject) =>{ /* promise takes two parameters*/
        setTimeout(() => { /*in setTimeOut(), there'e an if else statement that checks if there's an error */
            myPosts.push(post);
            const error = false;/* if there's no error, it will start the resolve() function and continue with .then to (see below) to pass the function and then run*/
            if(!error) {
                resolve();
            } else {
                reject('error. something went wrong!');/* if there is an error, it will run the reject() method and contine with .catch (see below) to pass the parameter to run*/
            }
        }, 2000);
    });
}
createPost({title: 'post three', body: 'this is the post three body'}).then(getPosts).catch( (e) ) => {
    console.log(e);
};

