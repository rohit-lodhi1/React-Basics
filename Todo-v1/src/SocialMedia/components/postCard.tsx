import { Post } from "../models/Post";
import { FaRegComments } from "react-icons/fa";
import { GrLike } from "react-icons/gr";
import { TbBrandStackshare } from "react-icons/tb";


export const PostCard = ({ post }: { post: Post }) => {
    console.log("post", post);

    return (
        <>
            <div className="card" >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5I3v262h8eUot8mr3ogcmFGQ-t6VQn6S7UQ&s  " className="card-img-top" alt="..." />
                <div className="card-body">
                    <div className="post-content">
                        <h5 className="card-title">{post.title}</h5>
                        <p className="card-text">{post.description}</p>
                    </div>
                    <div className="lower-sec"  >
                        <div>
                            <FaRegComments className="icons" /><div>{post.comments}</div>
                        </div>
                        <div>
                            <GrLike className="icons" /><div>{post.likes}</div>
                        </div>
                        <div>
                            <TbBrandStackshare className="icons" /><div>{post.comments}</div>
                        </div>
                    </div>
                    {/* <a href="#" className="btn btn-primary ">Go somewhere</a> */}
                </div>
            </div></>
    )
}