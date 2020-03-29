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
    alignItems: "flex-start",
    flexDirection: "column",
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
    zIndex: 9,
    height: 200,
    width: 200,
    marginTop: "50%",
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
    margin: "25px 10px",
    fontFamily: "Roboto",
    cursor: "pointer",
    borderRadius: "10px",
    padding: 20
  },
  selectedSubtitle: {
    textAlign: "center",
    letterSpacing: "2px",
    margin: "25px 10px",
    fontFamily: "Roboto",
    cursor: "pointer",
    border: "solid 2px black",
    borderRadius: "10px",
    padding: 20,
  },

  linkedin: {
    cursor: "pointer"
  },
  linkedinIcon: {
    color: "#4875B4",
    height: "40px",
    width: "40px",
  },
  twitterIcon: {
    color: "#00acee",
    height: "40px",
    width: "40px",
  },
  githubIcon: {
    color: "333",
    height: "40px",
    width: "40px",
  },
  devicon: {
    height: "40px",
    width: "40px"
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
  bannerProfile: {
    height: 500,
    position: "absolute",
    top: -250,
    opacity: 0.5,
    right: 0,
    left: 0,
    margin: "auto"
  },

};

export default styles;
