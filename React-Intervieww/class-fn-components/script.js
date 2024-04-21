function App() {
  return (
    <div>
      <h2>Class-ic React vs Functional React Components</h2>
      <Counter />
      <PhotoGallery />
    </div>
  );
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.incrementCount}>+</button>
      </div>
    );
  }
}

const PhotoGallery = () => {
  const [photos, setPhotos] = React.useState([]);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => setPhotos(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div>Photos</div>
      <div>
        {photos.splice(0, 5).map((p, i) => (
          <img key={p.id} src={p.thumbnailUrl} />
        ))}
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
