import * as linksService from '../service/linksService'

class LinksController {
  async getAllLinks(reqest, response, next) {
    try {
      let allTheLinks = await linksService.getAll()
      response.status(200).json({
        success: "true",
        message: "All links gotten",
        data: allTheLinks
      })
    } catch (error) {
        console.log(error.message)
        res.status(404).json({message:"Links not found"})
    }
  }
}

const linkController = new LinksController();
export default linkController;
