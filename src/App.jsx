const stories = [
  {
    objectID: "1",
    title: "React is the future of web development",
    url: "https://reactjs.org",
    author: "Eya Elmanai",
    points: 245,
    num_comments: 43,
  },
  {
    objectID: "2",
    title: "Understanding JavaScript closures deeply",
    url: "https://developer.mozilla.org",
    author: "John Smith",
    points: 178,
    num_comments: 31,
  },
  {
    objectID: "3",
    title: "Vite is replacing Create React App",
    url: "https://vitejs.dev",
    author: "Sara Dev",
    points: 312,
    num_comments: 67,
  },
];

function App() {
  console.log(stories[0]);

  return (
    <div>
      <h1>Hacker News Stories</h1>

      <h2>Warm-up</h2>
      <p>Q: What kind of content does Hacker News display?</p>
      <p>A: Hacker News displays technology news, programming articles, startup stories, and science content submitted by users.</p>
      <p>Q: What information do you usually see for each post?</p>
      <p>A: For each post you usually see a title, a link, the author name, a points score, and the number of comments.</p>

      <h2>Step 1 - Data Structure</h2>
      <p>Q: Which property should be used as the React key?</p>
      <p>A: objectID should be used as the React key because it is unique for every story.</p>
      <p>Q: Why is this structure realistic for an API?</p>
      <p>A: Because it mirrors the actual Hacker News API response format, making it easy to switch from fake data to real data later.</p>

      <h2>Step 2 - Data Outside Component</h2>
      <p>Q: Why do we define this data outside the component for now?</p>
      <p>A: Because it does not change and does not depend on the component lifecycle. It is static data that all components can access.</p>
      <p>Q: What will change when data comes from the API later?</p>
      <p>A: We will fetch data using useEffect and store it with useState inside the component, so it updates when the API responds.</p>

      <h2>Step 3 - Rendering with map()</h2>
      <p>Q: What does map() return?</p>
      <p>A: map() returns a new array of JSX elements, one for each item in the original array.</p>
      <p>Q: Why is map() preferred over forEach() in React rendering?</p>
      <p>A: Because map() returns a new array that React can render, while forEach() returns nothing.</p>

      {stories.map((story) => (
        <div key={story.objectID}>
          <h3>
            <a href={story.url} target="_blank" rel="noreferrer">
              {story.title}
            </a>
          </h3>
          <p>Author: <span>{story.author}</span></p>
          <p>Points: <span>{story.points}</span></p>
          <p>Comments: <span>{story.num_comments}</span></p>
        </div>
      ))}

      <h2>Step 4 - Display Content</h2>
      <p>Q: What happens if url is missing?</p>
      <p>A: The link would have no href and clicking it would do nothing or navigate to the current page.</p>
      <p>Q: Should links open in a new tab?</p>
      <p>A: Yes, using target="_blank" so users do not leave the app while reading a story.</p>

      <h2>Step 5 - React Keys</h2>
      <p>Q: Why is objectID a better key than the index?</p>
      <p>A: Because objectID is stable and unique. The array index changes when items are added or removed, causing React to re-render incorrectly.</p>
      <p>Q: What problem does React solve using keys?</p>
      <p>A: Keys help React identify which items changed, were added, or removed, making list re-rendering efficient and correct.</p>

      <h2>Reflection</h2>
      <p>1. map() is essential because it transforms each data item into a JSX element and returns an array React can render directly.</p>
      <p>2. objectID is the correct key because it is unique and stable, unlike the array index which shifts when data changes.</p>
      <p>3. When we replace fake data with the Hacker News API, we will fetch data using useEffect, store it with useState, and the component will re-render automatically when the data arrives.</p>
    </div>
  );
}

export default App;