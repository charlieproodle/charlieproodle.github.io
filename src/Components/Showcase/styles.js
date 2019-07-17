const styles = {
  container: {
    margin: "2.5%",
    border: "solid 2px lightgray",
    paddingTop: "20px",
    borderRadius: "5px",
    width: "33.33%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  icon: {
    textAlign: "center",
    marginBottom: "20px",
    padding: "20px",
    borderBottom: "solid 1px lightgray"
  },
  iconImg: {
    height: "50px"
  },
  text: {
    marginBottom: "20px",
    padding: "0 20px",
    fontFamily: "Roboto"
  },
  stack: {
    paddingLeft: "5%"
  },
  link: {
    padding: "20px 20px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "lightgray"
    }
  }
};

export default styles;
