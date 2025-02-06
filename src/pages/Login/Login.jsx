
import { useForm } from 'react-hook-form';
import banner from '../../assets/banner2.avif'
import { Link } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import toast from 'react-hot-toast';
import SocialLogin from '../../componants/socialLogin/SocialLogin';
const Login = () => {
  const {signInwithEmail} = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    signInwithEmail(data?.email, data?.password)
    .then(res=>{
      console.log(res);
      toast.success("Login Successfully")
      
    })
  }
  return (
    <div
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover"

      }}

      className="w-screen  h-screen  flex justify-center items-center relative">
        
      <div

        className="card  md:w-[35%] w-[95%] bg-white bg-opacity-30  shrink-0 shadow-2xl">
          <Link to="/" className='bg-white py-2 px-4 rounded-lg shadow-lg  w-[120px] text-center mt-6 ml-8'>Back home</Link>
        <p className='text-4xl font-semibold text-center pt-2'>Login Now</p>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body text-lg">

          <div className="form-control">
            <label className="label">
              <span className="">Email</span>
            </label>
            <input {...register("email")} type="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="">Password</span>
            </label>
            <input type="password" {...register("password")} placeholder="password" className="input input-bordered" required />

          </div>
          <div className="form-control mt-6">
            <button className=" py-2 bg-indigo-600 text-white text-lg">Login</button>
          </div>
        </form>
        <SocialLogin></SocialLogin>
        <p className='pl-8 pb-3'>New to the website ? please <Link to="/register" className='text-indigo-600 font-semibold text-lg'>Register</Link></p>
      </div>

    </div>
  );
};

export default Login;