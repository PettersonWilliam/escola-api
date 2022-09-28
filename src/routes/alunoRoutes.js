import { Router } from 'express';
import alunoController from '../controllers/AlunoController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', alunoController.index); // nao logamos no index pois neste caso ele so lista
router.post('/', loginRequired, alunoController.store); // loginRequired -- usuarios logados
router.put('/:id', loginRequired, alunoController.update); // loginRequired -- usuarios logados
router.get('/:id', alunoController.show); // tbm nao usamos no show pois ele so lista 1
router.delete('/:id', loginRequired, alunoController.delete);// loginRequired - usuarios logados

export default router;
