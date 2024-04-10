import { Outlet } from "react-router-dom";
import { CreatePost } from "./components/createPost";
import { Footer } from "./components/footer";
import { NavBar } from "./components/navbar";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Post } from "./components/post";
import { PostList } from "./components/postList";
import { Sidebar } from "./components/sidebar";
import './SocialMediaApp.css'

export function SocialMediaApp() {
    return <>
        <div className="app-container">
            <Sidebar></Sidebar>
            <div className="content">
                <NavBar></NavBar>
                <Outlet />
                {/* <CreatePost></CreatePost>
                <PostList></PostList> */}
                <Footer></Footer>
            </div>
        </div>
    </>
}