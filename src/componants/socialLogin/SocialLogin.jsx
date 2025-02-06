import toast from 'react-hot-toast';
import google from '../../assets/google.webp'
import useAuth from '../../Hooks/useAuth';

const SocialLogin = () => {
    const {GoogleLogin} = useAuth()
    const handleGoogleLogin =()=>{
        GoogleLogin()
        .then(res=>{
            toast.success("Login Successfully")            
        })
        .catch(err=>{
            console.log(err);   
        })
    }

    return (
        <div>
            <div className='divider' >OR</div>
            <div className='flex items-center justify-center my-4'>
                <div onClick={handleGoogleLogin} className='flex items-center justify-center border-4 px-5 cursor-pointer bg-slate-100'>
                    <p className='text-lg font-semibold'>Continue with </p>
                    <img src={google} className='w-10' alt="" />
                </div>
            </div>

        </div>
    );
};

export default SocialLogin;