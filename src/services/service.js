import { Client, Account, ID } from "appwrite";

import { config } from "../config/envconfig";
import {
  validateEmail,
  validatePassword,
} from "../helpers/validateEmailAndPassword";

class Service {
  constructor() {
    this.client = new Client()
      .setEndpoint(config.appwriteAPIEndpoint)
      .setProject(config.appwriteProjectId);

    this.account = new Account(this.client);
  }

  async currentUser() {
    try {
      const user = await this.account.get();
      if (user.$id) {
        return {
          response: user,
          message: "ok",
        };
      } else {
        return {
          response: null,
          message: user.message,
        };
      }
    } catch (error) {
      return {
        response: null,
        message: "Something went wrong.",
      };
    }
  }

  async userLogin(email, password) {
    try {
      const session = await this.account.createEmailPasswordSession(
        email,
        password
      );
      if (session.$id) {
        const user = await this.currentUser();
        return {
          response: user.response,
          message: `Welcome! ${user.response.name} :)`,
        };
      } else {
        throw new Error(session.message);
      }
    } catch (error) {
      return {
        response: null,
        message: String(error),
      };
    }
  }

  async userLogout() {
    try {
      await this.account.deleteSessions();
      return {
        response: true,
        message: "See you again! :)",
      };
    } catch (error) {
      return {
        response: false,
        message: "Something went wrong.",
      };
    }
  }

  async userSignup(email, password, name) {
    try {
      if (validateEmail(email) && validatePassword(password)) {
        const userId = ID.unique();
        const user = await this.account.create(userId, email, password, name);
        if (user.$id) {
          return {
            response: user,
            message: "ok",
          };
        } else {
          return {
            response: null,
            message: user.message,
          };
        }
      } else {
        return {
          response: null,
          message: "Please enter valid email and password.",
        };
      }
    } catch (error) {
      return {
        response: null,
        message: "Something went wrong.",
      };
    }
  }

  // This function will be used to initiate password reset by entering email of user and sending recovery email to user.
  async initResetPassword(email) {
    try {
      if (validateEmail(email)) {
        // Below url will redirect user to page where user can enter new password.
        const baseURL = "http://localhost:5173";
        const token = await this.account.createRecovery(
          email,
          `${baseURL}/resetPassword/confirm`
        );
        if (token.$id) {
          return {
            response: token,
            message: "ok",
          };
        } else {
          return {
            response: null,
            message: token.message,
          };
        }
      } else {
        return {
          response: null,
          message: "Please enter valid email.",
        };
      }
    } catch (error) {
      return {
        response: null,
        message: "Something went wrong.",
      };
    }
  }

  // This function will take new password and secret token from user which we sent to user's email with above function and update password.
  async confirmResetPassword(userId, secret, password) {
    try {
      if (validatePassword(password)) {
        const token = await this.account.updateRecovery(
          userId,
          secret,
          password
        );
        if (token.$id) {
          return {
            response: token,
            message: "ok",
          };
        } else {
          return {
            response: null,
            message: token.message,
          };
        }
      } else {
        return {
          response: null,
          message: "Please enter valid password.",
        };
      }
    } catch (error) {
      return {
        response: null,
        message: "Something went wrong.",
      };
    }
  }
}

const service = new Service();

export default service;
