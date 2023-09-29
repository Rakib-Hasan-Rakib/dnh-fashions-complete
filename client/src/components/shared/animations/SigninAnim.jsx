import Lottie from 'lottie-react';
import signin from '/public/animation-json/signin.json'
const SigninAnim = () => {
    return <Lottie animationData={signin} loop={true} className="w-[300px]" />;
};

export default SigninAnim;