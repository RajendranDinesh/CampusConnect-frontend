import Layout from './layout';
import NewPost from './components/newPost';
import Post from './components/post';

export default function Feed() {
    return (
        <Layout>
            <div className=" flex flex-col gap-8 bg-background-color p-4 md:p-8 md:px-16 ">
                <NewPost />
                <Post />
            </div>
        </Layout>
    );
}
