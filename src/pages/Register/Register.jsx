import { useForm } from 'react-hook-form';
import banner from '../../assets/banner2.avif'
import { Link } from 'react-router';

const Register = () => {
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
        
                className="card  lg:w-[40%] md:w-[55%] w-[95%] bg-white bg-opacity-30  shrink-0 shadow-2xl">
                <p className='text-4xl font-semibold text-center pt-5'>Register Now</p>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body text-base">
                    <div className='md:flex justify-between gap-3'>

                  <div className="form-control w-full">
                    <label className="label">
                      <span className="">Name *</span>
                    </label>
                    <input {...register("name")} type="text" placeholder="name" className="input input-bordered w-full" required />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="">photo *</span>
                    </label>
                    <input {...register("photo")} type="url" placeholder="Photo URL" className="input input-bordered" required />
                  </div>
                    </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="">Email *</span>
                    </label>
                    <input {...register("email")} type="email" placeholder="email" className="input input-bordered" required />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="">Password *</span>
                    </label>
                    <input type="password" {...register("password")} placeholder="password" className="input input-bordered" required />
        
                  </div>
                  <div className="form-control mt-6">
                    <button className=" py-2 bg-indigo-600 text-white text-lg">Login</button>
                  </div>
                </form>
        <p className='pl-8 pb-3'>Already Have an Account ? please <Link to="/login" className='text-indigo-600 font-semibold text-lg'>Login</Link></p>

              </div>
        
            </div>
    );
};

export default Register;