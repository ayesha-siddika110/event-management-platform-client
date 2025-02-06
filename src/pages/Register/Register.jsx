import { useForm } from 'react-hook-form';
import banner from '../../assets/banner2.avif'
import { Link } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import toast from 'react-hot-toast';
import SocialLogin from '../../componants/socialLogin/SocialLogin';

const Register = () => {
    const { signUpWithEmail } = useAuth()
    console.log(signUpWithEmail);


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        signUpWithEmail(data?.email, data?.password)
            .then(res => {
                console.log(res);
                toast.success('Register Successfully')
                // navigate("/")            
            })
            .catch(err => {
                console.log(err);
            })

        console.log(data)
    }

    return (
        <div
            style={{
                backgroundImage: `url(${banner})`,
                backgroundSize: "cover"

            }}

            className="w-screen  h-screen  flex justify-center items-center">
            <div

                className="card  lg:w-[35%] md:w-[55%] w-[95%] bg-white bg-opacity-30  shrink-0 shadow-2xl">
                <Link to="/" className='bg-white py-2 px-4 rounded-lg shadow-lg  w-[120px] text-center mt-6 ml-8'>Back home</Link>

                <p className='text-4xl font-semibold text-center pt-2'>Register Now</p>
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
                        <button className=" py-2 bg-indigo-600 text-white text-lg">Register</button>
                    </div>
                </form>
                <SocialLogin></SocialLogin>
                <p className='pl-8 pb-3'>Already Have an Account ? please <Link to="/login" className='text-indigo-600 font-semibold text-lg'>Login</Link></p>

            </div>

        </div>
    );
};

export default Register;