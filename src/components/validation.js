import * as yup from 'yup';

const validations = yup.object({
    email: yup.string().email('Geçerli Bir E-Mail Giriniz').required('Bu alan zorunludur.'),
    password : yup.string().min(5,'Parola en az 5 karakter olmalıdır.').required('Bu alan zorunludur.'),
    passwordConfirm : yup.string().oneOf([yup.ref('password')],'Parolalar Uyuşmuyor.').required('Bu alan zorunludur'),
  });
  export default validations;