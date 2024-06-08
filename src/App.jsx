import { useState } from 'react';
import { nanoid } from 'nanoid';
import data from './data';

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleChange = (e) => {
    setCount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    setText(data.slice(0, amount));
    console.log(text);
  };

  return (
    <section className="section-center">
      <h4>tired of boring lorem ipsum?</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs: </label>
        <input
          type="number"
          name="amount"
          id="amount"
          min="1"
          step="1"
          max="8"
          value={count}
          onChange={handleChange}
        />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item) => {
          const id = nanoid();
          return <p key={id}>{item}</p>;
        })}
      </article>
    </section>
  );
};
export default App;
