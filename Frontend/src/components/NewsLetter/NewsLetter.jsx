import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="news-letter">
      <h1>Get Exclusice Offers On Your email</h1>
      <p>Subscribe our newsletter and stay updated</p>
      <div>
        <input type="email" name="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
