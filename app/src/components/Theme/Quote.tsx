import QuoteIcon from "@/assets/quote.svg"

interface CustomQuote {
  content: string;
}

const Quote: React.FC<CustomQuote> = ({ content }) => {
  return (
    <div className="quote">
      <QuoteIcon className="quote__icon" />
      <q className="quote__text" >{content}</q>
    </div>
  );
};

export default Quote;
