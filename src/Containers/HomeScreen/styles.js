const styles = {
  mainContainer: {
    padding: "10px"
  },
  backgroundIcon: {
    zIndex: 1,
    height: "550px",
    width: "550px",
    position: "absolute",
    right: 0,
    top: 0,
    opacity: "0.1"
  },
  name: {
    fontSize: "25px",
    letterSpacing: "2px"
  },
  backgroundIcon2: {
    zIndex: 1,
    height: "200px",
    width: "200px",
    position: "absolute",
    top: 0,
    left: 0,
    opacity: "0.1"
  },
  header: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  detail: {
    paddingBottom: "15px",
    display: "flex",
    flex: 1,
    justifyContent: "flex-start",
    flexGrow: 1,
    alignItems: "flex-start"
  },
  seperator: {
    margin: "auto",
    border: "solid 1px lightgray",
    width: "20%",
    animation: "$borderAnimation 3s",
    animationFillMode: "forwards"
  },
  "@keyframes borderAnimation": {
    from: { width: "20%"},
    to: { width: "80%"}
  },
  detailText: {
    fontFamily: "Monaco",
    paddingLeft: "10px"
  },
  profilePicture: {
    borderRadius: "50%",
    marginRight: "10px",
    opacity: "0",
    animation: "$avatarAnimation 3s",
    animationFillMode: "forwards"
  },
  "@keyframes avatarAnimation": {
    from : {opacity: 0},
    to: {opacity: 0.75}
  },
  projectContainer: {
    position: "relative",
    zIndex: 2
  },
  projects: {
    display: "flex",
    justifyContent: "center"
  },
  subtitle: {
    textAlign: "center",
    letterSpacing: "2px",
    marginTop: "25px",
    fontFamily: "Roboto"
  },
  linkedin: {
    cursor: "pointer"
  },
  linkedinIcon: {
    color: "#4875B4",
    height: "40px",
    width: "40px"
  },
  devicon: {
    height: "40px",
    width: "40px"
  },
  reactIcon: {
    color: "#61DBFB"
  },
  androidIcon: {
    color: "#A4C639"
  },
  jsIcon: {
    color: "#F0DB4F"
  },
  subtext: {
    fontSize: "12px"
  },
  footer: {
    border: "solid 2px black",
    marginTop: "20%",
    backgroundColor: "lightgray",
    height: "100px"
  },
  previousProjectContainer: {
  },
  imgIcon: {
    marginRight: "5%",
    height: "30px",
    width: "30px"
  },
};

export default styles;
