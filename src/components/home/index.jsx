import { Footer } from './footer';
import { Header } from './header';
import { MainBar } from './mainbar';

export const HomePage = () => {
  return (
    <div className=" bg-gray-500 h-[500px]">
      <div className="m-20">
        <div className="w-96 h-96 rounded-lg  m-3 bg-blue-600 origin-bottom -rotate-6"></div>
        <div className="w-96 h-96 rounded-lg  m-3 bg-white absolute top-20 left-16">
          <Header />
          <MainBar />
          <Footer />
        </div>
      </div>
    </div>
  );
};
