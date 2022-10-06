import { ReactNode } from 'react';

type Wrapper = {
  title: string;
  children: ReactNode;
};

function FormWrapper({ title, children }: Wrapper) {
  return (
    <div className="flex flex-col gap-6 w-full">
      <p className="text-white text-2xl mb-4 break-words">{title}</p>
      {children}
    </div>
  );
}

export default FormWrapper;
