import { useEffect } from 'react'
import { Formik, Form, useFormikContext } from 'formik';
import * as Yup from 'yup';
import './RegistrationForm.css'

const EffectHandler = () => {
    const { values } = useFormikContext();
    useEffect(() => {
      console.log(values)
    }, [values]);
    return null;
  };

function RegistrationForm() {
    const handleSubmit = () => {
        console.log("Datos enviados")
    }
      
    return (
        <Formik
         initialValues={{nombre:'', apellido:'', email:'', password:''}}
         onSubmit={handleSubmit}
         validationSchema={Yup.object({
           nombre: Yup.string().required('El nombre es obligatorio'),
           apellido: Yup.string().required('El apellido es obligatorio'),
           email: Yup.string().required('El email es obligatorio'),
           password: Yup.string().required('La contraseña es obligatoria').min(8, 'La contraseña debe tener al menos 8 caracteres').max(16, 'La contraseña debe tener como máximo 20 caracteres')
         })}
      
        >
         {({touched, errors,values, handleChange})=>(
            <div className={"container"}>
                <h2>Registrarse</h2>
           <Form>
            <label htmlFor="nombre">Nombre</label>
             <input type="text" name="nombre" value={values.nombre} onChange={handleChange}/>
             {errors.nombre && touched.nombre ? <span>{errors.nombre}</span> : null}
      
            <label htmlFor="apellido">Apellido</label>
             <input type="text" name="apellido" value={values.apellido} onChange={handleChange}/>
             {errors.apellido && touched.apellido ? <span>{errors.apellido}</span> : null}
      
            <label htmlFor="email">Email</label>
             <input type="email" name="email" value={values.email} onChange={handleChange}/>
             {errors.email && touched.email ? <span>{errors.email}</span> : null}
      
            <label htmlFor="password">Contraseña</label>
             <input type="password" name="password" value={values.password} onChange={handleChange}/>
             {errors.password && touched.password ? <span>{errors.password}</span> : null}
      
             <button type="submit">
               Enviar
             </button>
             <EffectHandler />
         </Form>
         </div>
         )}
      
        </Formik>
       )
}

export default RegistrationForm