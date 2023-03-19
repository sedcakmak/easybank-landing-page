import { useContext } from "react";
import { MobileContext } from "../App";
import styled from "styled-components";
import currency from "../images/image-currency.jpg";
import confetti from "../images/image-confetti.jpg";
import plane from "../images/image-plane.jpg";
import restaurant from "../images/image-restaurant.jpg";

const ArticleWrapper = styled.div`
  padding: 6rem 9rem;

  @media (max-width: 800px) {
    padding: 0;
    text-align: center;
  }
`;
const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  /* flex-direction: ${({ mobile }) => (mobile ? "column" : "row")}; */
  list-style-type: none;
  justify-content: space-between;
  margin-top: 2rem;
  align-items: center;
  text-align: left;

  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    padding-left: 2rem;
  }
`;

const Li = styled.li`
  width: 13rem;

  @media (max-width: 800px) {
    width: 80%;
  }
`;

export default function Articles() {
  const mobile = useContext(MobileContext);
  return (
    <ArticleWrapper>
      <h2>Latest Articles</h2>
      <Ul mobile={mobile}>
        <Li>
          <img
            src={currency}
            alt="different currencies"
            className="article-img"
          />
          <p className="article-author">By Claire Robinson</p>
          <h4>Receive money in any currency with no fees</h4>
          <p className="article-text">
            The world is getting smaller and we're becoming more mobile. So why
            should you be forced to only receive money in a single ...
          </p>
        </Li>
        <Li>
          <img
            src={restaurant}
            alt="restaurant"
            className="article-img"
          />
          <p className="article-author">By Wilson Hutton</p>
          <h4>Treat yourself without worrying about money</h4>
          <p className="article-text">
            Our simple budgeting feature allows you to separate out your
            spending and set realistic limits each month. That means you ...
          </p>
        </Li>
        <Li>
          <img
            src={plane}
            alt="plane"
            className="article-img"
          />
          <p className="article-author">By Wilson Hutton</p>
          <h4>Take your Easybank card wherever you go</h4>
          <p className="article-text">
            We want you to enjoy your travels. This is why we don't charge any
            fees on purchases while you're abroad. We'll even show you ...
          </p>
        </Li>
        <Li>
          <img
            src={confetti}
            alt="confetti"
            className="article-img"
          />
          <p className="article-author">By Claire Robinson</p>
          <h4>Our invite-only Beta accounts are now live!</h4>
          <p className="article-text">
            After a lot of hard work by the whole team, we're excited to launch
            our closed beta. It's easy to request an invite through this site
            ...
          </p>
        </Li>
      </Ul>
    </ArticleWrapper>
  );
}
