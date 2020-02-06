class NavbarAPI {

  static homeClick(PROPS) {
    let userid = PROPS.location.pathname.split("/")[2];
    PROPS.history.push(`/user/${userid}`)
  };

  static chatClick(PROPS) {
    let userid = PROPS.location.pathname.split("/")[2];
    PROPS.history.push(`/user/${userid}/message`)
  }

  static friendClick(PROPS) {
    let userid = PROPS.location.pathname.split("/")[2];
    PROPS.history.push(`/user/${userid}/friend`)
  }
};

export default NavbarAPI;
