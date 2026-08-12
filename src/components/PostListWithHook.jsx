import useFetch from '../hooks/useFetch';
import PostCard from './PostCard';

function PostListWithHook() {
    const { data, loading, error } = useFetch(
        'https://dummyjson.com/posts?limit=10'
    );
    const posts = data?.posts;

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            {posts?.map(post => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
}

export default PostListWithHook;