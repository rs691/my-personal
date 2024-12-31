import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function MyComponent() {
  const images = {
    stars: './assets/GeneratedImage.jpg',
  };

  const url = (name, wrap = false) =>
    `${wrap ? 'url(' : ''}${images[name]}${wrap ? ')' : ''}`;

  return (
    <Parallax pages={4}>
      {/* First Layer */}
      <ParallaxLayer offset={0} speed={1} style={{ backgroundColor: '#243B4A' }}>
        <h1 style={{ color: 'white', textAlign: 'center', paddingTop: '50vh' }}>
          Welcome to Page 1
        </h1>
      </ParallaxLayer>

      {/* Second Layer */}
      <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }}>
        <h1 style={{ color: 'white', textAlign: 'center', paddingTop: '50vh' }}>
          Welcome to Page 2
        </h1>
      </ParallaxLayer>

      {/* Third Layer */}
      <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }}>
        <h1 style={{ color: 'white', textAlign: 'center', paddingTop: '50vh' }}>
          Welcome to Page 3
        </h1>
      </ParallaxLayer>

      {/* Fourth Layer with Image */}
      <ParallaxLayer
        offset={3}
        speed={1}
        factor={3} // Extends this layer across multiple pages
        style={{
          backgroundImage: url('stars', true),
          backgroundSize: 'cover',
        }}
      >
        <h1 style={{ color: 'white', textAlign: 'center', paddingTop: '50vh' }}>
          Welcome to Page 4
        </h1>
      </ParallaxLayer>
    </Parallax>
  );
}

export default MyComponent;
