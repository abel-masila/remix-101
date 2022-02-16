import { Outlet } from 'remix';
function Posts() {
  return (
    <div>
      <h1>Post Route here..</h1>
      <Outlet />
    </div>
  );
}

export default Posts;
