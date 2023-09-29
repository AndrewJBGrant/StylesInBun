// import { useState, useEffect } from 'react';
import styled, { ThemeProvider } from "styled-components";
// import WebFont from 'webfontloader';
// import { GlobalStyles } from './theme/GlobalStyles';
// import {useTheme} from './theme/useTheme';
// import './App.css'

const Container = styled.div`
    color: #BF4F74;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
  border-radius: 3px;
`;

const RedContainer = styled(Container)`
  color: tomato;
  border-color: tomato;
`

const Box = styled.h1`
  color: ${props => props.theme.color};
  cursor: ${props => props.theme.cursor}
`

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  cursor: pointer;

  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`;

// We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
Button.defaultProps = {
  theme: {
    main: "#BF4F74"
  }
}

// Define what props.theme will look like
const theme = {
  main: "mediumseagreen"
};


const newButton = styled.button`
  color: ${props => props.theme.fg};
  border: 2px solid ${props => props.theme.fg};
  background: ${props => props.theme.bg};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  `;






function App() {
  // const {theme, themeLoaded, getFonts} = useTheme();
  // const [selectedTheme, setSelectedTheme] = useState(theme);
  // console.log(theme, "theme form app.jsx")
// {console.log(theme, 'hello my theme we meet again')}

return (
<>

<Container>
Working on React Themes
</Container>

<RedContainer>Red container</RedContainer>
<RedContainer as="a" href='#'>Using as to change to a link</RedContainer>

<ThemeProvider theme={{color: "#bf00b8", cursor: "pointer"}}>
<Box>Hello its a me</Box>

</ThemeProvider>

  <div>
    <Button>Normal</Button>

    <ThemeProvider theme={theme}>
      <h1>hello</h1>
      <Button>Themed</Button>
{/* {console.log(Button.main, "My theme")} */}
    </ThemeProvider>
  </div>















{/*
        <ThemeProvider>
        <GlobalStyles/>
        <Container style={{fontFamily: selectedTheme.font}}>
          <h1>Theme Builder</h1>
          <p>
            This is a theming system with a Theme Switcher and Theme Builder.
            Do you want to see the source code? <a href="https://github.com/atapas/theme-builder" target="_blank" rel="noreferrer">Click here.</a>
          </p>
        </Container>
       </ThemeProvider> */}



    {/* <section>
        <div className="container">
        <div className="item item-1">1</div>
        <div className="item item-2">2</div>
        <div className="item item-3">3</div>
        <div className="item item-4">4</div>
        <div className="item item-5">5</div>
        <div className="item item-6">6</div>
        <div className="item item-7">7</div>
        <div className="item item-8">8</div>
        <div className="item item-9">9</div>
      </div>
    </section> */}
    </>
  )
}

export default App
