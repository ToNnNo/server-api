class HomeController {

  index(req, res) {
    res.json({ 'message': 'welcome' });
  }

}

export default new HomeController();
