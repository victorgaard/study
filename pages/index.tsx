import { FormEvent, useState } from 'react';
import Head from 'next/head';
import useMultistepForm from '../components/useMultistepForm';
import PersonalDetails from '../components/personal-details';
import GeoDetails from '../components/geo-details';
import AccountDetails from '../components/account-details';
import LoggedIn from '../components/logged-in';

type Data = {
  firstName: string;
  lastName: string;
  city: string;
  state: string;
  email: string;
  password: string;
};

function Home() {
  const [data, setData] = useState<Data>({
    firstName: '',
    lastName: '',
    city: '',
    state: '',
    email: '',
    password: ''
  });

  const {
    step,
    steps,
    currentStep,
    isFirstStep,
    isFinishStep,
    isLastStap,
    next,
    back
  } = useMultistepForm([
    <PersonalDetails key={1} {...data} updateData={updateData} />,
    <GeoDetails key={2} {...data} updateData={updateData} />,
    <AccountDetails key={3} {...data} updateData={updateData} />,
    <LoggedIn key={4} {...data} updateData={updateData} />
  ]);

  function updateData(newData: Partial<Data>) {
    setData(prev => {
      return { ...prev, ...newData };
    });
  }

  function progressBar() {
    const percentage = 100 / steps.length;
    const stepToPercentage = currentStep * percentage;
    return stepToPercentage.toFixed(0);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    next();
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>

        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-slate-800 sm:bg-slate-900 w-full h-screen flex items-start sm:items-center justify-center">
        <div className="bg-slate-800 flex flex-col w-full sm:w-[40rem] px-6 py-16 sm:px-16 rounded-lg relative">
          {!isLastStap && (
            <div className="absolute top-[4.25rem] right-6 sm:right-16 flex justify-end text-slate-400">
              {currentStep} / {steps.length}
            </div>
          )}
          <form onSubmit={e => handleSubmit(e)}>
            <div className="flex justify-center items-center">{step}</div>
            <div className="mt-6"></div>
            {!isLastStap && (
              <div className="flex flex-col-reverse gap-6 sm:gap-0 sm:flex-row items-center justify-between">
                <div className="w-full sm:w-56 h-4 bg-slate-700 rounded-full overflow-hidden relative">
                  <span
                    className="absolute left-0 h-full bg-green-600 text-xs font-medium text-slate-900 flex items-center justify-end pr-2 transition-[width]"
                    style={{ width: `${progressBar()}%` }}
                  >
                    {progressBar()}%
                  </span>
                </div>
                <div className="flex gap-6 w-full sm:w-auto">
                  {!isFirstStep && (
                    <button
                      type="button"
                      onClick={back}
                      className="w-full px-8 py-4 rounded bg-slate-600 hover:bg-slate-500 active:bg-slate-700 text-slate-200 transition-colors"
                    >
                      Back
                    </button>
                  )}
                  <button
                    type="submit"
                    className="w-full px-8 py-4 rounded  bg-blue-700 hover:bg-blue-600 active:bg-blue-700 text-slate-200 transition-colors"
                  >
                    {isFinishStep ? 'Finish' : 'Next'}
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </main>
    </div>
  );
}

export default Home;
