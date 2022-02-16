import { Link, redirect } from 'remix';
export const action = async ({ request }) => {
  const form = await request.formData();
  const title = form.get('title');
  const body = form.get('body');
  const post = { title, body };
  //submit post to database
  // return redirect('/posts');
};

function New() {
  return (
    <>
      <div className="page-header">
        <h1>New Post</h1>
        <Link to="posts" className="btn btn-reverse">
          Back
        </Link>
      </div>
      <div className="page-content">
        <form method="POST">
          <div className="form-control">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" />
          </div>
          <div className="form-control">
            <label htmlFor="body">Post Body</label>
            <textarea id="body" name="body" />
          </div>
          <button className="btn btn-block" type="submit">
            Add Post
          </button>
        </form>
      </div>
    </>
  );
}

export default New;
