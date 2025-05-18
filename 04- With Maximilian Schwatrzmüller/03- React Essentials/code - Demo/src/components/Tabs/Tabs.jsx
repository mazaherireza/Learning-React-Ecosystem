const Tabs = ({ buttons, children, Container = "menu" }) => {
  return (
    <>
      <Container>{buttons}</Container>
      {children}
    </>
  );
};

export default Tabs;
