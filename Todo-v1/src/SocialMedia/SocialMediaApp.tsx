import { Outlet } from "react-router-dom";
import { Footer } from "./components/footer";
import { NavBar } from "./components/navbar";
import { Sidebar } from "./components/sidebar";
import './SocialMediaApp.css'
import { PostListContextProvider } from "./store/PostListProvider";

export function SocialMediaApp() {
    return <>
        <PostListContextProvider>
            <div className="app-container">
                <Sidebar></Sidebar>
                <div className="content">
                    <NavBar></NavBar>
                    <div className="post-container">
                        <Outlet />
                    </div>
                    {/* <CreatePost></CreatePost>
                <PostList></PostList> */}
                    <Footer></Footer>
                </div>
            </div>
        </PostListContextProvider>
    </>
}