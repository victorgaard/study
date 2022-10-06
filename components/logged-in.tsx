import { useRouter } from 'next/router';
import FormWrapper from './form-wrapper';

type LoggedInData = {
  firstName: string;
  lastName: string;
  city: string;
  state: string;
  email: string;
  password: string;
};

type LoggedInDetails = LoggedInData & {
  updateData: (newData: Partial<LoggedInData>) => void;
};

function LoggedIn({
  firstName,
  lastName,
  city,
  state,
  email,
  password,
  updateData
}: LoggedInDetails) {
  const router = useRouter();

  function logout() {
    router.reload();
    updateData({
      firstName: '',
      lastName: '',
      city: '',
      state: '',
      email: '',
      password: ''
    });
  }

  return (
    <FormWrapper title={`Welcome, ${firstName}!`}>
      <div></div>
      <div className="grid grid-cols-2 gap-8 sm:gap-0 text-slate-400">
        <div>
          <p className="text-slate-200 font-medium">First name</p>
          <p className="break-words">{firstName}</p>
        </div>
        <div>
          <p className="text-slate-200 font-medium">Last name</p>
          <p className="break-words">{lastName}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8 sm:gap-0 text-slate-400">
        <div>
          <p className="text-slate-200 font-medium">City</p>
          <p className="break-words">{city}</p>
        </div>
        <div>
          <p className="text-slate-200 font-medium">State</p>
          <p className="break-words">{state}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8 sm:gap-0 text-slate-400">
        <div>
          <p className="text-slate-200 font-medium">Email</p>
          <p className="break-words">{email}</p>
        </div>
        <div>
          <p className="text-slate-200 font-medium">Password</p>
          <p className="break-words">{password.replace(/./g, '*')}</p>
        </div>
      </div>
      <div className="mt-2"></div>
      <button
        onClick={logout}
        className="bg-blue-700 p-6 rounded text-white hover:bg-blue-600 active:bg-blue-700 transition-all"
      >
        Logout
      </button>
    </FormWrapper>
  );
}

export default LoggedIn;
