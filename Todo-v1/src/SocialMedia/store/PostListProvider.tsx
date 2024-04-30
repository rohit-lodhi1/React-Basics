import { createContext, useReducer } from "react";
import { Post } from "../models/Post";


const contextStructure = {
    postList: [],
    addPost: () => { },
    deletePost: () => { }
};

export const PostListContext = createContext(contextStructure);



export const postListReducer = ({ currentPostList, action }: { currentPostList: Post[], action: any }) => {
    let newState = currentPostList;
    if (action.type == "CREATE_POST") {

    }
    return newState;
}



export const PostListContextProvider = ({ children }: { children: any }) => {

    const initial: Post[] = [{
        title: 'React',
        description: 'React turtorial',
        comments: 0,
        likes: 0,
        share: 0
    }]

    let [postList, dispatchPostList]: [Post[], any] = useReducer(postListReducer, initial);

    function addPost() {

    }

    function deletePost() {

    }



    return (
        <PostListContext.Provider value={{
            postList,
            addPost,
            deletePost
        }}>
            {children}
        </PostListContext.Provider>
    )
}