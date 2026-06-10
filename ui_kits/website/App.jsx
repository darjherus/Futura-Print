/* ============================================================
   App — assembles the Futura Print marketing site
   ============================================================ */
function App() {
  const [quote, setQuote] = React.useState(false);
  useReveal();
  const openQuote = () => setQuote(true);
  return (
    <React.Fragment>
      <Header onQuote={openQuote} />
      <Hero onQuote={openQuote} />
      <Services />
      <StatsBand />
      <Portfolio />
      <Process />
      <Footer onQuote={openQuote} />
      <QuoteFlow open={quote} onClose={() => setQuote(false)} />
    </React.Fragment>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
