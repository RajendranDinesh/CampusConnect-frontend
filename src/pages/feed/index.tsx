import Layout from './layout';
import NewPost from './components/newPost';
import Post from '../../components/Post';

import TempImage from '@/assets/images/temp_post.jpg';

export default function Feed() {
    return (
        <Layout>
            <div className=" flex flex-col gap-8 bg-background-color p-4 md:p-8 md:px-16 ">
                <NewPost />
                <Post commentCount={69} companyRole="Swift Developer" likeCount={420} showControls text="What did the Dursleys care if Harry lost his place on the House Quidditch team because he hadn’t practiced all summer? What was it to the Dursleys if Harry went back to school without any of his homework done? The Dursleys were what wizards called Muggles (not a drop of magical blood in their veins)." user="Sanjeevi Kumar K" />
                <Post companyRole="Lead Developer @ CampusConnect" showControls image={TempImage} text="Crashing Pongal Vizha 2k24" user="PRd" />
            </div>
        </Layout>
    );
}
