
import { useForm } from 'react-hook-form';
import banner from '../../../assets/banner2.avif'
import { Link } from 'react-router';
const Login = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <div
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover"

      }}

      className="w-screen  h-screen  flex justify-center items-center">
      <div

        className="card  md:w-[40%] w-[95%] bg-white bg-opacity-30  shrink-0 shadow-2xl">
        <p className='text-4xl font-semibold text-center pt-5'>Login Now</p>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input {...register("email")} type="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" {...register("password")} placeholder="password" className="input input-bordered" required />

          </div>
          <div className="form-control mt-6">
            <button className=" py-2 bg-indigo-600 text-white text-lg">Login</button>
          </div>
        </form>
        <p className='pl-8 pb-3'>New to the website ? please <Link to="/register" className='text-indigo-600 font-semibold text-lg'>Register</Link></p>
      </div>

    </div>
  );
};

export default Login;