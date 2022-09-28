class HomeController {
  async index(req, res) {
    res.json('Index');// novoAluno
  }
}

export default new HomeController();
