import { Parallax, ParallaxLayer } from '@react-spring/parallax';



function MyPortfolio() {
  const images = {
    about: './assets/about.svg',
    education: './assets/education.jpg',
    awards: './assets/awards.jpg',
    projects: './assets/projects.jpg',
    satellite: './assets/satellite.jpg',
  };

  const url = (name, wrap = false) =>
    `${wrap ? 'url(' : ''}${images[name]}${wrap ? ')' : ''}`;


  
  return (
    <Parallax pages={4}>
      {/* About Me */}
      <ParallaxLayer
        offset={0}
        speed={0.5}
        style={{
          backgroundImage: url('about', true),
          backgroundSize: 'cover',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            color: 'white',
            textAlign: 'center',
            background: 'rgba(0, 0, 0, 0.5)', // Overlay for readability
          }}
        >
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>About Me</h1>
          <p style={{ maxWidth: '600px', fontSize: '1.5rem' }}>
            Hi! Im [Your Name], a passionate developer and designer dedicated
            to creating innovative solutions.
          </p>
        </div>
      </ParallaxLayer>

        {/* Satellite */}

        <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
            <img src={url('satellite')} style={{ width: '15%', marginLeft: '70%' }} />
        </ParallaxLayer>

      {/* Education */}
      <ParallaxLayer
        offset={1}
        speed={0.5}
        style={{
          backgroundImage: url('education', true),
          backgroundSize: 'cover',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            color: 'white',
            textAlign: 'center',
            background: 'rgba(0, 0, 0, 0.5)', // Overlay for readability
          }}
        >
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Education</h1>
          <p style={{ maxWidth: '600px', fontSize: '1.5rem' }}>
            Bachelor of Science in Computer Science, XYZ University.
          </p>
        </div>
      </ParallaxLayer>

      {/* Awards */}
      <ParallaxLayer
        offset={2}
        speed={0.5}
        style={{
          backgroundImage: url('awards', true),
          backgroundSize: 'cover',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            color: 'white',
            textAlign: 'center',
            background: 'rgba(0, 0, 0, 0.5)', // Overlay for readability
          }}
        >
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Awards</h1>
          <p style={{ maxWidth: '600px', fontSize: '1.5rem' }}>
            Recognized with the Best Innovator Award at XYZ Hackathon 2022.
          </p>
        </div>
      </ParallaxLayer>

      {/* Projects */}
      <ParallaxLayer
        offset={3}
        speed={0.5}
        style={{
          backgroundImage: url('projects', true),
          backgroundSize: 'cover',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            color: 'white',
            textAlign: 'center',
            background: 'rgba(0, 0, 0, 0.5)', // Overlay for readability
          }}
        >
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Projects</h1>
          <p style={{ maxWidth: '600px', fontSize: '1.5rem' }}>
            - Project 1: AI-powered chatbot<br />
            - Project 2: Responsive portfolio website<br />
            - Project 3: Mobile app for productivity tracking
          </p>
        </div>
      </ParallaxLayer>
    </Parallax>
  );
}

export default MyPortfolio;
