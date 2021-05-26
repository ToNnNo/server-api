import models from '../models';

class ProductController {

  async index(req, res) {
    const products = await models.Produit.findAll({
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      }
    });
    res.json( products );
  }

  async detail(req, res) {
    const id = req.params.id;
    const product = await models.Produit.findByPk(id, {
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      }
    });

    if(!product) { // si heroe === null
      res.status(404).json({ 'message': `La ressource n'existe pas` });
      return;
    }

    res.json( product );
  }

  async delete(req, res) {
    const id = req.params.id;

    await models.Produit.destroy({ where: { id } });
    res.status(204).json();
  }

  async add(req, res) {
    const body = req.body;

    try {
      const product = await models.Produit.create( body );
      res.status(201).json(product);
    } catch(e) {
      res.status(400).json({ message: e.message });
    }

  }

  async update(req, res) {
    const body = req.body;
    const id = req.params.id;

    try {
      await models.Produit.update( body, { where: { id } } );
      res.status(204).json();
    } catch(e) {
      res.status(400).json({ message: e.message });
    }
  }

}

export default new ProductController();
