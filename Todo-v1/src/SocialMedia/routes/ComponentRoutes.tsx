import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { SocialMediaApp } from "../SocialMediaApp";
import { CreatePost } from "../components/createPost";
import { PostList } from "../components/postList";
import Profile from "../components/profile";

const route = createBrowserRouter([
    {
        path: '/',
        element: <SocialMediaApp />,
        children: [
            {
                path: '', element: <PostList />
            },
            {
                path: 'create-post', element: <CreatePost />
            },
            {
                path: 'profile', element: <Profile />
            }
        ]
    }
])

export default route;


export const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<SocialMediaApp />}>
            <Route path="" element={<PostList />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/profile" element={<Profile />} />
        </Route>
    )
)