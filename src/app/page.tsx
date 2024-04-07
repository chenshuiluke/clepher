import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import EngagementTable from "./components/EngagementTable";
import Pagination from "./components/Pagination";

const Home = () => {
  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <main className="p-4">
            <h1 className="text-xl font-semibold">Post Engagements</h1>
            <EngagementTable />
            <Pagination />
          </main>
        </div>
      </div>
    </>
  );
};

export default Home;
