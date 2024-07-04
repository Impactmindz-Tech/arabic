import BackButtonMenu from "../../../layout/BackButtonMenu.jsx";
import Header from "../../../components/Header.jsx";
import NotificationCard from "../../../components/cards/NotificationCard/NotificationCard.jsx";
const NotificationPage = () => {
  return (
    <>
      <div className="w-[90%] m-auto pb-20 sm:w-[100%]">
        <Header />
        <BackButtonMenu text="الاشعارات" link="/" />

        <div className="my-6 gap-y-5 flex flex-wrap justify-end">
          <NotificationCard active={true}/>
          <NotificationCard active={false}/>
          <NotificationCard active={false}/>
        </div>
      </div>
    </>
  );
};

export default NotificationPage;
