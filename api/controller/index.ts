import { controller, route } from "../core";

@controller()
class IndexController {
  @route('/', 'get')
  index(req, res) {
    res.send('Hello World');
  }
}

export default IndexController;
