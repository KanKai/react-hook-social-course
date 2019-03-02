class UserModel {
  constructor(model = {}) {
    this.model = model;

    return {
      email: model.email || "",
      password: model.password || "",
      confirmPassword: model.confirmPassword || "",
      firstName: model.firstName || "",
      lastName: model.lastName || ""
    };
  }
}

export default UserModel;
