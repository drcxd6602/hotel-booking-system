import "./email.scss";

const Email = () => {
  return (
    <div className="email">
      <div className="top">
        <div className="top-container">
          <span className="title">Save time, save money!</span>
          <p className="desc">Sign up and we'll send the best deals to you</p>
          <form className="input-email">
            <input type="email" placeholder="Your email address" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="middle">
        <div className="middle-container">
          <button className="list-property">List your property</button>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-container">
          <span>Github</span>
          <span>LinkedIn</span>
          <span>Portfolio</span>
        </div>
      </div>
    </div>
  );
};

export default Email;
