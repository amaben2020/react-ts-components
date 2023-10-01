import { FC } from 'react';

export const Layout: FC<any> = () => {
  return (
    <section className="grid grid-flow-row-dense grid-cols-1 place-items-center gap-2 gap-x-2 md:grid-cols-2 lg:grid-cols-3">
      <div className="h-[500px] w-1/2 rounded-2xl border bg-[#d4d4d4] p-6 lg:w-[400px]">
        1
      </div>
      <div className=" h-[500px] w-[400px] rounded-2xl border bg-[#d4d4d4] p-6 lg:col-span-1">
        2
      </div>{' '}
      <div className="h-[500px] w-[400px] rounded-2xl border bg-[#d4d4d4] p-6">
        3
      </div>{' '}
      <div className="h-[500px] w-[400px] rounded-2xl border bg-[#d4d4d4] p-6">
        4
      </div>{' '}
      <div className="h-[500px] w-[400px] rounded-2xl border bg-[#d4d4d4] p-6">
        5
      </div>{' '}
      <div className="h-[500px] w-[400px] rounded-2xl border bg-[#d4d4d4] p-6">
        6
      </div>{' '}
      <div className="h-[500px] w-[400px] rounded-2xl border bg-[#d4d4d4] p-6">
        7
      </div>
    </section>
  );
};
