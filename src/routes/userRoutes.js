import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// esse dois metodos em uma aplicacao real nao deveria existir pois seria uma falha de seguranca ..
// eslint-disable-next-line max-len
// suponhamos que estamos em uma determinada pagina e nao seria viavel mostrar se alguem queira listar todos os usuarios
// isso seria uma falha muito grande
router.get('/', userController.index); // lista usuarios -- OU SEJA COLOCAMOS ESSES DOIS PARA PARA COMPLETAR O CRUD
router.get('/:id', userController.show); // lista usuario -- OU SEJA COLOCAMOS ESSES DOIS PARA PARA COMPLETAR O CRUD

router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/** ESSES SAO OS METODOS QUE AGENTE PODE TER
 *
 * index -- lista todos os usuarios -- GET
 * store/create -- cria um novo usuario -- POST
 * delete -- apaga um usuario -- DELETE
 * show -- mostra um usuario -- GET
 * update -- atualiza um usuario -- PATH ou PUT
 */
