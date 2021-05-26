import models from "../models";
import jwt from 'jsonwebtoken';

class AuthenticationController {

  async signIn(req, res) {

    const email = req.body.email;
    const password = req.body.password;

    const user = await models.User.findOne({ attributes: { exclude: [ 'createdAt', 'updatedAt', 'password' ] }, where: { email, password } });

    if(!user) {
      res.status(400).json({ 'message': `Erreur d'authentification` });
      return;
    }

    const payload = { id: user.id };
    const token = await jwt.sign(payload, 'commentestvotreblanquette', {
      algorithm: 'HS512',
      expiresIn: 900
    });

    res.json({ token, user });
  }

}

export default new AuthenticationController();
