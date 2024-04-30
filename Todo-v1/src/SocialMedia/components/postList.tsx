import { useContext } from "react"

import { PostListContext } from "../store/PostListProvider"
import { PostCard } from "./postCard";
import { Post } from "../models/Post";

export const PostList = () => {
    let { postList }: { postList: Post[] } = useContext(PostListContext);
    console.log(postList);

    return (
        <>
            {postList.map((p: Post) => {

                return <PostCard key={p.title} post={p}></PostCard>
            })}
        </>
    )
}
