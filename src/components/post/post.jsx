import { Link, useNavigate } from "react-router-dom";
import "./post.css";

export default function Post({ img, description, title, userId }) {
  const navigate = useNavigate();

  return (
    <div
      className="post"
      onClick={() => {
        navigate(`/post/${userId}`);
      }}
    >
      <img className="postImg" src={img} alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Life
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to="/post/abc" className="link">
            {title}
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">{description}</p>
    </div>
  );
}
