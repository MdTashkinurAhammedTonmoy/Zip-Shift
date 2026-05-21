import { useForm } from "react-hook-form";
import UseAuth from "../../../Hooks/UseAuth";
import { Link } from "react-router";
import GoogleSineIn from "../GoogleSineIn/GoogleSineIn";



const Register = () => {

  const { register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { registerUser } = UseAuth();

  const handleRegistion = (data) => {
    console.log(data)
    registerUser(data.email, data.password)
      .then(result => {
        console.log(result.user);
      })
      .catch(errors => {
        console.log(errors)
      })
  }

  return (
    <div className='card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl'>
      <h2 className='text-3xl font-extrabold text-center'>Create an Account</h2>
      <p className='text-center'>Register with ZapShift</p>
      <form className="card-body" onSubmit={handleSubmit(handleRegistion)}>
        <fieldset className="fieldset">

          {/* name */}

          {/* email */}
          <label className="label">Name</label>
          <input type="name" {...register('name', { required: true })} className="input" placeholder="Name" />

          {
            errors.name?.type === 'required' && <p className="text-red-500">name be required</p>
          }

          {/* email */}
          <label className="label">Email</label>
          <input type="email" {...register('email', { required: true })} className="input" placeholder="Email" />

          {errors.email?.type === 'required' && <p className="text-red-500">
            email be required
          </p>}



          {/* password */}
          <label className="label">Password</label>
          <input type="password" {...register('password', { required: true, minLength: 6, })} className="input" placeholder="Password" />

          {errors.password?.type === "required" && <p className="text-red-500">password be required</p>}
          {errors.password?.type === "minLength" && <p className="text-red-500">password must be 6 characters or longer</p>}

          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        <p>Already have an account? <Link className='text-[#8FA748] underline' to="/login">Login</Link> </p>
        <GoogleSineIn></GoogleSineIn>
      </form>
    </div>
  );
};

export default Register;
