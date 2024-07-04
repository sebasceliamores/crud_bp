import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

const requiredMessage = 'Este campo es requerido!';

export default yup.object().shape({
  id: yup
    .string()
    .required(requiredMessage)
    .min(3, 'El Id debe tener al menos 3 caracteres')
    .max(10, 'El Id no debe tener más de 10 caracteres'),
  name: yup
    .string()
    .required(requiredMessage)
    .min(5, 'Mínimo 5 caracteres')
    .max(100, 'Máximo 100 caracteres'),
  description: yup
    .string()
    .required(requiredMessage)
    .min(10, 'Mínimo 10 caracteres')
    .max(200, 'Máximo 200 caracteres'),
  logo: yup.string().required(requiredMessage),
  date_release: yup
    .date()
    .required(requiredMessage)
    .min(
      new Date(),
      'La Fecha de Liberación debe ser igual o posterior a la fecha actual',
    ),
  date_revision: yup
    .date()
    .required(requiredMessage)
});
