import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Hint from "./components/common/hint";
import Strings from "./strings";

function App() {
  return (
    <div>
        <GlobalStyle />
        <Hint head={Strings.head} text={Strings.text}/>
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
  @font-face {
        font-family: "proxima-nova-regular";
        src: url("./fonts/proximanova-regular.eot");
        src: url("./fonts/proximanova-regular.ttf") format("truetype"),
          url("./fonts/proximanova-regular.woff") format("woff"),
          url("./fonts/proximanova-regular.svg") format("svg");
        font-weight: normal;
        font-style: normal;
      }
      @font-face {
        font-family: "proxima-nova-semibold";
        src: url("./fonts/proximanova-semibold.eot");
        src: url("./fonts/proximanova-semibold.ttf") format("truetype"),
          url("./fonts/proximanova-semibold.woff") format("woff"),
          url("./fonts/proximanova-semibold.svg") format("svg");
        font-weight: normal;
        font-style: normal;
      }
`;

export default App;
