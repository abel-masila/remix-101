import { useLoaderData, Link } from 'remix';

export const loader = () => {
  const data = {
    posts: [
      {
        id: 1,
        title: 'Post 1',
        body: 'This is post 1',
      },
      {
        id: 2,
        title: 'Post 2',
        body: 'This is post 2',
      },
      {
        id: 3,
        title: 'Post 3',
        body: 'This is post 3',
      },
    ],
  };
  return data;
};
function PostItems() {
  const { posts } = useLoaderData();
  return (
    <div>
      <div className="page-header">
        <h1>Posts</h1>
        <Link to="/posts/new" className="btn">
          New Page
        </Link>
      </div>

      <ul className="posts-list">
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={post.id}>
              <h3>{post.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostItems;
