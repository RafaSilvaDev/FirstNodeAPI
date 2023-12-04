import SelecaoRepository from "../repositories/SelecaoRepository.js";

class SelecaoController {
  async show(req, res) {
    const result = await SelecaoRepository.findAll()
    res.status(200).json(result)
  }

  async index(req, res) {
    const result = await SelecaoRepository.findById(req.params.id)
    res.status(200).json(result)
  }

  async store(req, res) {
    const result = await SelecaoRepository.create(req.body)
    res.status(201).json(result)
  }

  async update(req, res) {
    const result = await SelecaoRepository.update(req.params.id, req.body)
    res.status(204).json(result)
  }

  async delete(req, res) {
    const result = await SelecaoRepository.delete(req.params.id, req.body)
    res.status(204).json(result)
  }
}

// padrão Singleton
export default new SelecaoController();
