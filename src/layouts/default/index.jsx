import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import WithAuthRedirect from "../../HOC/authRedirect";

const DefaultLayout = (props) => {
  return (
    <div className="w-screen h-screen border-box">
      <div className="fixed w-full">
        <Header />
      </div>
      <div className="flex flex-grow z-50 overflow-hidden h-screen">
        <Sidebar />
        <main className="p-4 mt-36 flex-grow bg-white overflow-auto">
          {props.children}
        </main>
      </div>
    </div>
  );
};

export default WithAuthRedirect(DefaultLayout);
