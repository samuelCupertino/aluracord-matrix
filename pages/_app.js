const GlobalStyle = () => (
  <style global jsx>{`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      list-style: none;
    }
    body {
      font-family: "monospace", sans-serif;
    }
  `}</style>
);

export default ({ Component, pageProps }) => {
  console.log("__app.js: component:");
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};
