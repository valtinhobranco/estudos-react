import * as Styles from "./styles";

type TweetProps = {
  text: string;
  className?: string;
};

function Tweet({ text, className }: TweetProps) {
  return (
    <>
      <Styles.Container className={className}>
        <h1>{text}</h1>
      </Styles.Container>
    </>
  );
}

export default Tweet;
