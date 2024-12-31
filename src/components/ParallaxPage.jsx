import React, { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';


// Little helpers ...
const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`;
export default function App() {
    const parallax = useRef(null);
    return (React.createElement("div", { style: { width: '100%', height: '100%', background: '#253237' } },
        React.createElement(Parallax, { ref: parallax, pages: 3 },
            React.createElement(ParallaxLayer, { offset: 1, speed: 1, style: { backgroundColor: '#805E73' } }),
            React.createElement(ParallaxLayer, { offset: 2, speed: 1, style: { backgroundColor: '#87BCDE' } }),
            React.createElement(ParallaxLayer, { offset: 0, speed: 0, factor: 3, style: {
                    backgroundImage: url('stars', true),
                    backgroundSize: 'cover',
                } }),
            React.createElement(ParallaxLayer, { offset: 1.3, speed: -0.3, style: { pointerEvents: 'none' } },
                React.createElement("img", { src: url('satellite4'), style: { width: '15%', marginLeft: '70%' } })),
            React.createElement(ParallaxLayer, { offset: 1, speed: 0.8, style: { opacity: 0.1 } },
                React.createElement("img", { src: url('cloud'), style: { display: 'block', width: '20%', marginLeft: '55%' } }),
                React.createElement("img", { src: url('cloud'), style: { display: 'block', width: '10%', marginLeft: '15%' } })),
            React.createElement(ParallaxLayer, { offset: 1.75, speed: 0.5, style: { opacity: 0.1 } },
                React.createElement("img", { src: url('cloud'), style: { display: 'block', width: '20%', marginLeft: '70%' } }),
                React.createElement("img", { src: url('cloud'), style: { display: 'block', width: '20%', marginLeft: '40%' } })),
            React.createElement(ParallaxLayer, { offset: 1, speed: 0.2, style: { opacity: 0.2 } },
                React.createElement("img", { src: url('cloud'), style: { display: 'block', width: '10%', marginLeft: '10%' } }),
                React.createElement("img", { src: url('cloud'), style: { display: 'block', width: '20%', marginLeft: '75%' } })),
            React.createElement(ParallaxLayer, { offset: 1.6, speed: -0.1, style: { opacity: 0.4 } },
                React.createElement("img", { src: url('cloud'), style: { display: 'block', width: '20%', marginLeft: '60%' } }),
                React.createElement("img", { src: url('cloud'), style: { display: 'block', width: '25%', marginLeft: '30%' } }),
                React.createElement("img", { src: url('cloud'), style: { display: 'block', width: '10%', marginLeft: '80%' } })),
            React.createElement(ParallaxLayer, { offset: 2.6, speed: 0.4, style: { opacity: 0.6 } },
                React.createElement("img", { src: url('cloud'), style: { display: 'block', width: '20%', marginLeft: '5%' } }),
                React.createElement("img", { src: url('cloud'), style: { display: 'block', width: '15%', marginLeft: '75%' } })),
            React.createElement(ParallaxLayer, { offset: 2.5, speed: -0.4, style: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    pointerEvents: 'none',
                } },
                React.createElement("img", { src: url('earth'), style: { width: '60%' } })),
            React.createElement(ParallaxLayer, { offset: 2, speed: -0.3, style: {
                    backgroundSize: '80%',
                    backgroundPosition: 'center',
                    backgroundImage: url('clients', true),
                } }),
            React.createElement(ParallaxLayer, { offset: 0, speed: 0.1, onClick: () => parallax.current.scrollTo(1), style: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                } },
                React.createElement("img", { src: url('server'), style: { width: '20%' } })),
            React.createElement(ParallaxLayer, { offset: 1, speed: 0.1, onClick: () => parallax.current.scrollTo(2), style: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                } },
                React.createElement("img", { src: url('bash'), style: { width: '40%' } })),
            React.createElement(ParallaxLayer, { offset: 2, speed: -0, style: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }, onClick: () => parallax.current.scrollTo(0) },
                React.createElement("img", { src: url('clients-main'), style: { width: '40%' } })))));
}
