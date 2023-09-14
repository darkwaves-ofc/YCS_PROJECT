const PageLayout = (props) => {
  return (
    <>
      {props.header}
      {props.children}
    </>
  );
};

export default PageLayout;