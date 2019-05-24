import { LocalAuth } from "./local";
import { JwtAuth } from "./jwt";

export class Auth {
    local = new LocalAuth();
    jwt = new JwtAuth();

    isAuthenticatedMiddleware() {
        return (req, res, next) => {
        };
    }

    signupController() {
        return (req, res) => {
        };
    }
    signinController() {
        return (req, res) => {
        };
    }
    signoutController() {
        return (req, res) => {
        };
    }
}
